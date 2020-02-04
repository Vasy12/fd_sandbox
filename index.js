/*

 1. Первые блюда
 1.1 ----
 1.2 ----
 1.3 ----
 1.4 Гру
 1.4.1
 1.4.2
 1.4.3
 1.5
 1.6
 2. Вторые блюда
 2.1
 2.2
 2.3
 2.3.1
 2.3.2
 2.4
 2.4.1
 2.4.2
 2.4.3
 2.4.4
 2.4.4.1
 2.4.4.2
 2.4.5
 2.4.6
 2.4.7
 */

class MenuUnit {
  /**
   *
   * @param {string} prefix
   */
  log (prefix = '') {

  }
}

class MenuPosition {
  /**
   *
   * @param {string} name
   */
  constructor (name) {
    this.name = name;
  }

  get name () {
    return this._name;
  }

  set name (value) {
    this._name = value;
  }

  log (prefix = '') {
    console.log( `${prefix} ${this.name}` );
  }
}

class Menu extends MenuUnit {
  /**
   *
   * @param {string} name
   * @param {Array<MenuUnit>} positions
   */
  constructor (name, positions = []) {
    super();
    this.name = name;
    this.positions = positions;
  }

  get positions () {
    return this._positions;
  }

  /**
   *
   * @param {Array<MenuUnit>} value
   */
  set positions (value) {
    this._positions = value;
  }

  /**
   *
   * @param {MenuUnit} position
   */
  addPosition (position) {
    if (position instanceof MenuUnit) {
      this.positions.push( position );
    } else {
      throw new TypeError();
    }
  }

  removePosition (position) {
    const positionIndex = this.positions.findIndex( position );
    if (positionIndex !== -1) {
      this.positions.splice( positionIndex, 1 );
    }
  }

  log (prefix) {
    console.log( `${prefix} ${this.name}` );
    this.positions.forEach( (item, index) => {
                              item.log( `${prefix
                                           ? `\t${prefix}.`
                                           : '\t'}${index + 1}` );
                            }
    );
  }

}

const menu = new Menu( 'Main menu' );

menu.addPosition( new Menu( 'Submenu 1', [
  new MenuPosition( 'Position 1' ),
  new MenuPosition( 'Position 2' ),
  new MenuPosition( 'Position 3' ),
  new Menu( 'Submenu 1', [
    new MenuPosition( 'Position 1' ),
    new MenuPosition( 'Position 3' ),
    new Menu( 'Position 4', [
      new MenuPosition( 'Position 1' ),
      new MenuPosition( 'Position 2' ),
      new MenuPosition( 'Position 3' ),
      new MenuPosition( 'Position 4' ),
      new MenuPosition( 'Position 5' ),
      new MenuPosition( 'Position 6' ),
    ] ),
    new MenuPosition( 'Position 5' ),
  ] )
] ) );

menu.addPosition( new Menu( 'Submenu 2', [
  new MenuPosition( 'Position 1' ),
  new MenuPosition( 'Position 2' ),
  new MenuPosition( 'Position 3' ),
  new Menu( 'Submenu 1', [
    new MenuPosition( 'Position 1' ),
    new MenuPosition( 'Position 3' ),
    new MenuPosition( 'Position 5' ),
  ] ),
  new MenuPosition( 'Position 4' ),
  new MenuPosition( 'Position 5' ),
  new MenuPosition( 'Position 6' ),
] ) );

menu.log();