type BemModifier = string | string[] | { [key: string]: boolean };

export class Bem {
  private blockName: string;

  constructor(blockName = '') {
    this.blockName = blockName;
  }

  private getModifierNames(modifier: BemModifier): string[] {
    if (Array.isArray(modifier)) {
      return modifier.filter(m => !!m);
    } else if (typeof modifier === 'object') {
      return Object.keys(modifier).filter(m => !!modifier[m]);
    } else if (modifier) {
      return [modifier];
    }
    return [];
  }

  private appendModifiers(name: string, modifiers?: BemModifier[]): string {
    if (modifiers && modifiers.length) {
      let modifierNames: string[] = [];
      for (let modifier of modifiers) {
        modifierNames = modifierNames.concat(this.getModifierNames(modifier));
      }
      if (modifierNames.length) {
        return name + ' ' + modifierNames.map(m => `${name}--${m}`).join(' ');
      }
    }
    return name;
  }

  b(...modifiers: BemModifier[]): string {
    return this.appendModifiers(this.blockName, modifiers);
  }

  e(element: string, ...modifiers: BemModifier[]): string {
    return this.appendModifiers(`${this.blockName}__${element}`, modifiers);
  }
}
