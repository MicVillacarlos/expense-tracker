import moment from "moment";

export const generateRandomId = () =>
  Math.random().toString(36).substring(2, 10);

export const weekToDateRange = (weekString) => {
  const [year, week] = weekString.split("-W").map(Number);

  if (!year || !week || week < 1 || week > 53) {
    throw new Error("Invalid week format. Use YYYY-WWW.");
  }
  

  const startDate = moment()
    .year(year)
    .week(week)
    .startOf("week")
    .format("YYYY-MM-DD");
  const endDate = moment()
    .year(year)
    .week(week)
    .endOf("week")
    .format("YYYY-MM-DD");

  return { startDate, endDate };
};

export const filterExpensesByDate = (expenseData, dateRange) => {
    const { startDate, endDate } = dateRange;
    
    return expenseData.filter(expense => {
        const expenseDate = moment(expense.date);
        return expenseDate.isBetween(moment(startDate), moment(endDate), null, '[]');
    });
};

export const today = moment().format("YYYY-MM-DD");
