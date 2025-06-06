namespace PracticalCoding.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class AddExpenseTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Expenses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        Description = c.String(nullable: false, maxLength: 200),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Category = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);

        }

        public override void Down()
        {
            DropTable("dbo.Expenses");
        }
    }
}
