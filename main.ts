// Enums allow a developer to define a set of named constants. 
// Using enums can make it easier to document intent, or create a set of distinct cases.
//  TypeScript provides both numeric and string-based enums.


// Numeric enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }

//   String enums
  enum DirectionString {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }

  interface Point {
      x: number,
      y: number
  }

  let drawPoint = (point: Point)=>{
      //..
  }

  drawPoint({
      x:2,
      y:4
  })