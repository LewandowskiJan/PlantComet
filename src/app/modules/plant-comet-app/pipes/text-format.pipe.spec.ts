import { TextFormatPipe } from './text-format.pipe';

describe('TextFormatPipe', () => {
  let pipe: TextFormatPipe;
  beforeEach(() => {
    pipe = new TextFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('01234567890123456789012345')).toBe('01 2345 6789 0123 4567 8901 2345');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform(null)).toBe('brak numeru konta');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('saddas')).toBe('err: błędny format');
  });
});
