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

/*
 * армия 1
 *   корпус 3
 *     дивизия 3-6
 *       бригада 4
 *         полк  2-4
 *           взвод 4
 *             отделение 4
 *                  солдат
 *
 * */

class Component {
  execute () {

  }
}

class Leaf extends Component {

  /**
   *
   * @param {number} count - count of solders
   */
  constructor (count) {
    super();
    this.count = count;
  }

  get count () {
    return this._count;
  }

  set count (value) {

    if (Number.isInteger( value ) && value > 0) {
      this._count = value;

    } else {
      throw new RangeError();
    }

  }

  execute () {
    return this.count;
  }

}

class Composite extends Component {

  /**
   *
   * @param {Array<Component>} children
   */
  constructor (children = []) {
    super();
    this.children = children;
  }

  get children () {
    return this._children;
  }

  /**
   *
   * @param {Array<Component>} value
   */
  set children (value) {
    this._children = value;
  }

  /**
   *
   * @param {Component} child
   */
  addChild (child) {
    if (child instanceof Component) {
      this.children.push( child );
    }
  }

  execute () {
    return this.children.reduce( (count, item) => {
      return count + item.execute();
    }, 0 );
  }
}

const army = new Composite( [
                              new Composite( [
                                               new Composite( [
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                              ] ),
                                               new Composite( [
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                              ] ),
                                               new Composite( [
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                              ] ),
                                             ] ),
                              new Composite( [
                                               new Composite( [
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                              ] ),
                                               new Composite( [
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                              ] ),
                                               new Composite( [
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                               ] ),
                                                                new Composite( [
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),
                                                                                                ] ),
                                                                                 new Composite( [
                                                                                                  new Leaf( 20 ),
                                                                                                  new Leaf( 21 ),
                                                                                                  new Leaf( 18 ),
                                                                                                  new Leaf( 20 ),] ),

                                                                                 new Composite( [
                                                                                                  new Leaf(
                                                                                                    20 ),
                                                                                                  new Leaf(
                                                                                                    21 ),
                                                                                                  new Leaf(
                                                                                                    18 ),
                                                                                                  new Leaf(
                                                                                                    20 ),
                                                                                                ] ),
                                                                               ] ),
                                                              ] ),
                                             ] ),
                            ] );

console.log( 'Army solders count = ', army.execute() );

/////////////////////////////////////




class ArmyUnit {
  getSoldersCount () {

  }
}

class Solder extends ArmyUnit {
  constructor (status) {
    super();
    this.status = status;
  }

  get status () {
    return this._status;
  }

  set status (status) {
    this._status = status;
  }

  getSoldersCount () {

    return status === 'ready'
           ? 1
           : 0;
  }
}

class SpecificArmyUnit extends ArmyUnit {
  /**
   *
   * @param {string} name
   */
  constructor (name) {
    super();
    this.name = name;
  }

  get armyUnits () {
    return this._armyUnits;
  }

  /**
   *
   * @param {Array<ArmyUnit>} units
   */
  set armyUnits (units) {
    this._armyUnits = units;
  }

  getSoldersCount () {
    return this.armyUnits.reduce( (count, item) => {
      return count + item.getSoldersCount();
    }, 0 );
  }
}
