using Microsoft.EntityFrameworkCore.Migrations;

namespace NetworkMonitorApi.Migrations
{
    public partial class speetetstresultsCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SpeedTestResults",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<string>(nullable: true),
                    Upload = table.Column<decimal>(nullable: false),
                    Download = table.Column<decimal>(nullable: false),
                    Ping = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeedTestResults", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpeedTestResults");
        }
    }
}
