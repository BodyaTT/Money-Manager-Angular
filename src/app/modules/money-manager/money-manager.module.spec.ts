import { MoneyManagerModule } from './money-manager.module';

describe('MoneyManagerModule', () => {
  let moneyManagerModule: MoneyManagerModule;

  beforeEach(() => {
    moneyManagerModule = new MoneyManagerModule();
  });

  it('should create an instance', () => {
    expect(moneyManagerModule).toBeTruthy();
  });
});
