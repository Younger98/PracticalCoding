using System.Web.Mvc;

namespace PracticalCoding.Web.Controllers
{
    public class ExpenseController : Controller
    {
        // GET: Expense
        public ActionResult Index()
        {
            return View();
        }
    }
}
