import {PlannedIncomeDto} from "./planned-income-dto";
import {PlannedOutcomeDto} from "./planned-outcome-dto";

export interface PlanDto {
  id: string;
  start_date: string;
  end_date: string;
  initial_balance: number;
  current_balance: number;
  current_daily_balance: number;
  status: string;
  incomes: PlannedIncomeDto[];
  outcomes: PlannedOutcomeDto[];
}

