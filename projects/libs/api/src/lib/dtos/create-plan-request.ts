export class CreatePlanRequest {
  name: string;
  initial_balance: number;
  start_date: Date;
  end_date: Date;

  constructor(name: string, initialBalance: number, startDate: Date, endDate: Date) {
    this.name = name;
    this.initial_balance = initialBalance;
    this.start_date = startDate;
    this.end_date = endDate;
  }
}
