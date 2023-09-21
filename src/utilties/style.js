const g1 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
      },
    },
  };
  return obj;
};
const g2 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `'one two'`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
  };
  return obj;
};
const g3 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one three"
                            "two three"`,
        gridGap: "5px",
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
  };
  return obj;
};
const g4 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one three"
                            "two four"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
  };
  return obj;
};
const g5 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one one one two two two"
                            "three three four four five five"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
        gridTemplateAreas: `"one one"
                            "two two"
                            "three three"
                            "four five"
                           `,
      },
    },
    one: {
      gridArea: "one",
    },
    two: {
      gridArea: "two",
    },
    three: {
      gridArea: "three",
    },
    four: {
      gridArea: "four",
    },
    five: {
      gridArea: "five",
    },
  };
  return obj;
};

const g6 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three"
                            "four five six"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
        gridTemplateAreas: `"one one"
                            "two two"
                            "three four"
                            "five six "`,
      },
    },
    one: {
      gridArea: "one",
    },
    two: {
      gridArea: "two",
    },
    three: {
      gridArea: "three",
    },
    four: {
      gridArea: "four",
    },
    five: {
      gridArea: "five",
    },
    six: {
      gridArea: "six",
    },
  };
  return obj;
};
const g7 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one one one one two two two two three three three three"
                            "four four four five five five six six six seven seven seven"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
        gridTemplateAreas: `"one one"
        "two three"
        "five four"
        "six seven"`,
      },
    },
    one: {
      gridArea: "one",
    },
    two: {
      gridArea: "two",
    },
    three: {
      gridArea: "three",
    },
    four: {
      gridArea: "four",
    },
    five: {
      gridArea: "five",
    },
    six: {
      gridArea: "six",
    },
    seven: {
      gridArea: "seven",
    },
  };
  return obj;
};
const g8 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "five six seven eight"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
        gridTemplateAreas: `"one two"
       "five three"
       "six four"
        "seven eight"`,
      },
    },
    one: {
      gridArea: "one",
    },
    two: {
      gridArea: "two",
    },
    three: {
      gridArea: "three",
    },
    four: {
      gridArea: "four",
    },
    five: {
      gridArea: "five",
    },
    six: {
      gridArea: "six",
    },
    seven: {
      gridArea: "seven",
    },
    eight: {
      gridArea: "eight",
    },
  };
  return obj;
};
const g9 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "five two three four"
                            "five seven eight nine"
                            "six seven eight nine"
                            "six seven eight nine"`,
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
  };
  return obj;
};
const g10 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "five two three nine"
                            "five seven eight nine"
                            "six seven eight ten"
                            "six seven eight ten"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
    ten: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "ten",
      },
    },
  };
  return obj;
};
const g11 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "one two three four"
                            "five two three four"
                            "five two three ten"
                            "five two three ten"
                            "six eight nine ten"
                            "six eight nine ten"
                            "six eight nine eleven"
                            "seven eight nine eleven"
                            "seven eight nine eleven"
                            "seven eight nine eleven"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
    ten: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "ten",
      },
    },
    eleven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eleven",
      },
    },
  };
  return obj;
};
const g12 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "one two three four"
                            "five two three ten"
                            "five two three ten"
                            "five two three ten"
                            "six eight nine eleven"
                            "six eight nine eleven"
                            "six eight nine eleven"
                            "seven eight nine twelve"
                            "seven eight nine twelve"
                            "seven eight nine twelve"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
    ten: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "ten",
      },
    },
    eleven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eleven",
      },
    },
    twelve: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "twelve",
      },
    },
  };
  return obj;
};
const g13 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "one two three four"
                            "five two three eleven"
                            "five two three eleven"
                            "five two three eleven"
                            "six eight ten twelve"
                            "six eight ten twelve"
                            "six eight ten twelve"
                            "seven nine ten thirteen"
                            "seven nine ten thirteen"
                            "seven nine ten thirteen"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
    ten: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "ten",
      },
    },
    eleven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eleven",
      },
    },
    twelve: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "twelve",
      },
    },
    thirteen: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "thirteen",
      },
    },
  };
  return obj;
};
const g14 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "one two three four"
                            "five two three twelve"
                            "five two three twelve"
                            "five two three twelve"
                            "six eight ten thirteen"
                            "six eight ten thirteen"
                            "six eight ten thirteen"
                            "seven nine eleven fourteen"
                            "seven nine eleven fourteen"
                            "seven nine eleven fourteen"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
    ten: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "ten",
      },
    },
    eleven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eleven",
      },
    },
    twelve: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "twelve",
      },
    },
    thirteen: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "thirteen",
      },
    },
    fourteen: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "fourteen",
      },
    },
  };
  return obj;
};

const g15 = (theme) => {
  let obj = {
    gridContainer: {
      display: "grid",
      height: "calc(100svh - 80px)",
      gridAutoFlow: "dense",
      gridGap: "5px",
      [theme.breakpoints.up("sm")]: {
        height: "calc(100svh - 150px)",
        gridTemplateAreas: `"one two three four"
                            "one two three four"
                            "one two three four"
                            "five two three twelve"
                            "five two three twelve"
                            "five two three twelve"
                            "six eight ten thirteen"
                            "six eight ten thirteen"
                            "six eight ten thirteen"
                            "seven nine eleven fourteen"
                            "seven nine eleven fourteen"
                            "seven nine eleven fourteen"`,
      },
      [theme.breakpoints.down("sm")]: {
        gridGap: "3px",
      },
    },
    one: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "one",
      },
    },
    two: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "two",
      },
    },
    three: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "three",
      },
    },
    four: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "four",
      },
    },
    five: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "five",
      },
    },
    six: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "six",
      },
    },
    seven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "seven",
      },
    },
    eight: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eight",
      },
    },
    nine: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "nine",
      },
    },
    ten: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "ten",
      },
    },
    eleven: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "eleven",
      },
    },
    twelve: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "twelve",
      },
    },
    thirteen: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "thirteen",
      },
    },
    fourteen: {
      [theme.breakpoints.up("sm")]: {
        gridArea: "fourteen",
      },
    },
  };
  return obj;
};

export const style = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
];
