import { Piano } from '../piano';
import { Conversion } from './conversion';
import { Export } from './export';
import { Subscription } from './subscription';
import { User } from './user';

export class Publisher {
  public readonly user: User;
  public readonly subscription: Subscription;
  public readonly conversion: Conversion;
  public readonly export: Export;

  constructor(piano: Piano) {
    this.user = new User(piano);
    this.subscription = new Subscription(piano);
    this.conversion = new Conversion(piano);
    this.export = new Export(piano);
  }
}
