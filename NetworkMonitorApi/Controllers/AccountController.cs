using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Dtos;
using NetworkMonitorApi.Models;
using NetworkMonitorApi.Repositories;

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly AppSettings _appSettings;
        private readonly IRolesRepository _rolesRepository;
        private readonly IServiceProvider _serviceProvider;
        
        public AccountController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _signInManager = _serviceProvider.GetRequiredService<SignInManager<ApplicationUser>>();


            _userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            //_configuration = configuration;
            _roleManager = _serviceProvider.GetRequiredService<RoleManager<IdentityRole>>(); //roleManager;

            _appSettings = _serviceProvider.GetRequiredService<IOptions<AppSettings>>().Value; // appSettings.Value;
            _rolesRepository = _serviceProvider.GetRequiredService<IRolesRepository>();
        }

        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public async Task<User> Login([FromBody] LoginDto model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.Email);
                return await GenerateJwtToken(model.Email, appUser);
            }

            throw new ApplicationException("INVALID_LOGIN_ATTEMPT");
        }

        [HttpPost]
        [Route("Logout")]
        [AllowAnonymous]
        public async void Logout()
        {
            await _signInManager.SignOutAsync();
        }


        [HttpPost]
        [Route("Register")]
        [AllowAnonymous]
        public async Task<object> Register([FromBody] RegisterDto model)
        {
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName
            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return await GenerateJwtToken(model.Email, user);
            }

            throw new ApplicationException("UNKNOWN_ERROR");
        }

        [HttpGet]
        [Route("Users")]
        //[Authorize]
        [AllowAnonymous]
        public IEnumerable<User> GetAll()
        {
            var userRepo = _serviceProvider.GetRequiredService<IUsersRepository>();
            var users = userRepo.GetAllUsersAsync();
            // return users without passwords
            return users.Select(x =>
            {
                x.Password = null;
                return x;
            });
        }

        [HttpGet]
        [Route("User")]
        //[Authorize]
        [AllowAnonymous]
        public async Task<User> GetUserInfoAsync()
        {

            User user = new User();
            if (User.Identity.IsAuthenticated)
            {
                string uName = User.Identity.IsAuthenticated ? User.Identity.Name : null;

                if (!string.IsNullOrEmpty(uName))
                {
                    var roles = await _rolesRepository.GetUserRolesAsync(uName); //await _userManager.GetRolesAsync(new ApplicationUser
                    
                    user.UserName = uName;
                    user.Email = uName;
                    if (roles.Any())
                    {
                        user.Roles.AddRange(roles);
                    }
                }

            }
            return user;
        }

        /// <summary>
        /// Generate jsonToken
        /// </summary>
        /// <param name="email"></param>
        /// <param name="appUser"></param>
        /// <returns></returns>
        private async Task<User> GenerateJwtToken(string email, ApplicationUser appUser)
        {
            User user = new User();
           
            user.UserName = appUser.UserName;
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, email)
            };

            // get the users roles.
            var roles = await _userManager.GetRolesAsync(appUser);
            var u = await _userManager.FindByEmailAsync(appUser.UserName);
            if (u != null)
            {
                user.FirstName = u.FirstName;
                user.LastName = u.LastName;
            }
            if (!string.IsNullOrWhiteSpace(user.FirstName))
            {
    //            ((ClaimsIdentity)principal.Identity).AddClaims(new[] {
    //    new Claim(ClaimTypes.GivenName, user.FirstName)
    //});
            }

            if (!string.IsNullOrWhiteSpace(user.LastName))
            {
    //            ((ClaimsIdentity)principal.Identity).AddClaims(new[] {
    //     new Claim(ClaimTypes.Surname, user.LastName),
    //});
            }
            if (roles.Any())
            {
                claims.AddRange(roles.Select(role => new Claim(ClaimsIdentity.DefaultRoleClaimType, role)));
                user.Roles.AddRange(roles);
            }

            //security key
            var securityKey = Encoding.UTF8.GetBytes(_appSettings.Secret);//  Encoding.ASCII.GetBytes(_appSettings.Secret);
            //var signingKey = new SymmetricSecurityKey(securityKey);

            // SymmetricSecurityKey
            var symetricSecurityKey = new SymmetricSecurityKey(securityKey);

            // Signing Credentials
            var signingCredentials = new SigningCredentials(symetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);

            // Create Token
            var token = new JwtSecurityToken(
                issuer: _appSettings.Issuer, //"netmon.in",
                audience: _appSettings.Audience, // "readers",
                expires: DateTime.Now.AddHours(7),
                signingCredentials: signingCredentials,
                claims: claims
                );

            var sToken = new JwtSecurityTokenHandler().WriteToken(token);
            user.Token = sToken;
            user.Email = appUser.UserName;
            user.Password = null;
            return user;

        }
    }
}