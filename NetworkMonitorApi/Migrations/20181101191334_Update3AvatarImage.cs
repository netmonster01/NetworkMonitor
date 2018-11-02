using Microsoft.EntityFrameworkCore.Migrations;

namespace NetworkMonitorApi.Migrations
{
    public partial class Update3AvatarImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AvatarImageType",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvatarImageType",
                table: "AspNetUsers");
        }
    }
}
