using PracticalCoding.Web.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace PracticalCoding.Web.Controllers
{
    [RoutePrefix("api/expenses")]
    public class ExpenseApiController : ApiController
    {
        private EF6DbContext db = new EF6DbContext();

        // GET: api/expenses
        [HttpGet]
        [Route("")]
        public IQueryable<Expense> GetExpenses()
        {
            return db.Expenses.OrderByDescending(e => e.Date);
        }

        // GET: api/expenses/5
        [HttpGet]
        [Route("{id:int}")]
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> GetExpense(int id)
        {
            Expense expense = await db.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }
            return Ok(expense);
        }

        // POST: api/expenses
        [HttpPost]
        [Route("")]
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> PostExpense(Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Expenses.Add(expense);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { controller = "ExpenseApi", id = expense.Id }, expense);
        }

        // PUT: api/expenses/5
        [HttpPut]
        [Route("{id:int}")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutExpense(int id, Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expense.Id)
            {
                return BadRequest();
            }

            db.Entry(expense).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (Exception) // Add more specific catch for DbUpdateConcurrencyException if needed
            {
                if (!ExpenseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(expense); // Or StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/expenses/5
        [HttpDelete]
        [Route("{id:int}")]
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> DeleteExpense(int id)
        {
            Expense expense = await db.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }

            db.Expenses.Remove(expense);
            await db.SaveChangesAsync();

            return Ok(expense);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExpenseExists(int id)
        {
            return db.Expenses.Count(e => e.Id == id) > 0;
        }
    }
}
