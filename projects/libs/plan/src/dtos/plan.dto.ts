import {IncomeDto} from "./income.dto";
import {OutcomeDto} from "./outcome.dto";

export interface PlanDto {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    initialBalance: number;
    currentBalance: number;
    currentDailyBalance: number;
    incomes: Array<IncomeDto>;
    outcomes: Array<OutcomeDto>;
}
