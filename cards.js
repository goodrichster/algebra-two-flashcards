/**
 * Algebra 2 flashcard deck — edit this file to add or change cards.
 * Each card: topic id, type (rule | problem), front, back.
 * Plain text; use \n for line breaks in strings.
 */
(function () {
  window.ALGEBRA_TWO_CARDS = [
    /* ---------- quadratic basics ---------- */
    {
      id: "qb-1",
      topic: "quadratic-basics",
      type: "rule",
      front: "What is a quadratic function?",
      back: "A quadratic function is a function that can be written in the form f(x) = a(x - h)^2 + k.\n\nIt can also be written in standard form as y = ax^2 + bx + c, where a ≠ 0.\n\nIts graph is a parabola.",
    },
    {
      id: "qb-2",
      topic: "quadratic-basics",
      type: "rule",
      front: "What is the parent quadratic function?",
      back: "The parent quadratic function is f(x) = x^2.\n\nIts vertex is at (0, 0), it opens up, and its axis of symmetry is x = 0.",
    },
    {
      id: "qb-3",
      topic: "quadratic-basics",
      type: "rule",
      front: "What shape does the graph of a quadratic make?",
      back: "The graph of a quadratic is called a parabola.\n\nParabolas are symmetric and have a vertex, which is the highest or lowest point of the graph.",
    },
    {
      id: "qb-4",
      topic: "quadratic-basics",
      type: "rule",
      front: "How does the sign of a tell whether a parabola opens up or down?",
      back: "If a > 0, the parabola opens up.\nIf a < 0, the parabola opens down.\n\nThe value of a tells the direction of opening.",
    },
    {
      id: "qb-5",
      topic: "quadratic-basics",
      type: "rule",
      front: "When is the vertex a minimum, and when is it a maximum?",
      back: "If the parabola opens up, the vertex is a minimum.\nIf the parabola opens down, the vertex is a maximum.",
    },
    {
      id: "qb-6",
      topic: "quadratic-basics",
      type: "rule",
      front: "What is the axis of symmetry of a parabola?",
      back: "The axis of symmetry is the vertical line through the vertex that splits the parabola in half.\n\nIt is an invisible vertical line.",
    },

    /* ---------- forms of quadratics ---------- */
    {
      id: "fq-1",
      topic: "forms-of-quadratics",
      type: "rule",
      front: "What is standard form for a quadratic?",
      back: "Standard form is y = ax^2 + bx + c.\n\nIn this form, the value of a is easy to identify, and you can use a formula to find the axis of symmetry and vertex.",
    },
    {
      id: "fq-2",
      topic: "forms-of-quadratics",
      type: "rule",
      front: "What is vertex form for a quadratic?",
      back: "Vertex form is y = a(x - h)^2 + k.\n\nIn this form, the vertex is (h, k) and the axis of symmetry is x = h.",
    },
    {
      id: "fq-3",
      topic: "forms-of-quadratics",
      type: "rule",
      front: "What is intercept form for a quadratic?",
      back: "Intercept form is y = a(x - p)(x - q).\n\nThe x-intercepts are easy to identify in this form.\n\nThese are also called roots, zeros, or solutions.",
    },
    {
      id: "fq-4",
      topic: "forms-of-quadratics",
      type: "rule",
      front: "What is the leading coefficient of a quadratic?",
      back: "The leading coefficient is the number a in a quadratic.\n\nIn standard form y = ax^2 + bx + c, it is the coefficient of x^2.\n\nIt tells whether the parabola opens up or down.",
    },
    {
      id: "fq-5",
      topic: "forms-of-quadratics",
      type: "rule",
      front: "In vertex form y = a(x - h)^2 + k, how do you read the vertex?",
      back: "The vertex is (h, k).\n\nBe careful with signs:\n(x - 3)^2 gives h = 3, so the x-coordinate is 3.\n(x + 5)^2 means x - (-5), so h = -5.",
    },
    {
      id: "fq-6",
      topic: "forms-of-quadratics",
      type: "rule",
      front: "In vertex form y = a(x - h)^2 + k, how do you read the axis of symmetry?",
      back: "The axis of symmetry is x = h.\n\nExample: y = 3(x - 7)^2 - 8 has axis of symmetry x = 7.",
    },

    /* ---------- formulas and process ---------- */
    {
      id: "fp-1",
      topic: "finding-vertex",
      type: "rule",
      front: "What formula finds the axis of symmetry for a quadratic in standard form?",
      back: "For y = ax^2 + bx + c, the axis of symmetry is x = -b / (2a).\n\nFind a and b first, then substitute carefully.",
    },
    {
      id: "fp-2",
      topic: "finding-vertex",
      type: "rule",
      front: "How do you find the vertex of a quadratic in standard form?",
      back: "Step 1: Identify a and b.\nStep 2: Use x = -b / (2a) to find the x-coordinate.\nStep 3: Plug that x-value back into the function to find y.\nStep 4: Write the vertex as (x, y).",
    },
    {
      id: "fp-3",
      topic: "finding-vertex",
      type: "rule",
      front: "How do you decide whether a standard-form quadratic has a minimum or maximum?",
      back: "Look at a.\nIf a > 0, the parabola opens up and the vertex is a minimum.\nIf a < 0, the parabola opens down and the vertex is a maximum.",
    },
    {
      id: "fp-4",
      topic: "finding-vertex",
      type: "rule",
      front: "Why is vertex form easier than standard form for finding the vertex?",
      back: "In vertex form, the vertex is already built into the equation.\n\nFor y = a(x - h)^2 + k, the vertex is simply (h, k), so no formula is needed.",
    },

    /* ---------- vocabulary ---------- */
    {
      id: "v-1",
      topic: "vocabulary",
      type: "rule",
      front: "What is a vertex?",
      back: "The vertex is the highest or lowest point on a parabola.\n\nIt is the turning point of the graph.",
    },
    {
      id: "v-2",
      topic: "vocabulary",
      type: "rule",
      front: "What are x-intercepts of a quadratic also called?",
      back: "They are also called roots, zeros, or solutions.\n\nThese are the x-values where the graph crosses the x-axis.",
    },
    {
      id: "v-3",
      topic: "vocabulary",
      type: "rule",
      front: "What does it mean when a parabola opens up?",
      back: "It means the arms of the parabola point upward.\n\nThe vertex is the lowest point, so it is a minimum.",
    },
    {
      id: "v-4",
      topic: "vocabulary",
      type: "rule",
      front: "What does it mean when a parabola opens down?",
      back: "It means the arms of the parabola point downward.\n\nThe vertex is the highest point, so it is a maximum.",
    },

    /* ---------- problems: standard form ---------- */
    {
      id: "ps-1",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = x^2 + 2x - 5.",
      back: "Identify a = 1 and b = 2.\nAxis of symmetry: x = -b / (2a) = -2 / 2 = -1.\nNow plug in x = -1:\nf(-1) = (-1)^2 + 2(-1) - 5 = 1 - 2 - 5 = -6.\nVertex: (-1, -6).\nSince a = 1 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = -1; vertex (-1, -6); minimum.",
    },
    {
      id: "ps-2",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = 4x^2 - 16x + 6.",
      back: "Identify a = 4 and b = -16.\nAxis of symmetry: x = -(-16) / (2·4) = 16 / 8 = 2.\nNow plug in x = 2:\nf(2) = 4(2^2) - 16(2) + 6 = 16 - 32 + 6 = -10.\nVertex: (2, -10).\nSince a = 4 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = 2; vertex (2, -10); minimum.",
    },
    {
      id: "ps-3",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = -2x^2 - 8x + 1.",
      back: "Identify a = -2 and b = -8.\nAxis of symmetry: x = -(-8) / (2·-2) = 8 / -4 = -2.\nNow plug in x = -2:\nf(-2) = -2(-2)^2 - 8(-2) + 1 = -8 + 16 + 1 = 9.\nVertex: (-2, 9).\nSince a = -2 < 0, the parabola opens down.\n\nAnswer: axis of symmetry x = -2; vertex (-2, 9); maximum.",
    },
    {
      id: "ps-4",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = 0.5x^2 - 3x + 9.5.",
      back: "Identify a = 0.5 and b = -3.\nAxis of symmetry: x = -(-3) / (2·0.5) = 3 / 1 = 3.\nNow plug in x = 3:\nf(3) = 0.5(3^2) - 3(3) + 9.5 = 4.5 - 9 + 9.5 = 5.\nVertex: (3, 5).\nSince a = 0.5 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = 3; vertex (3, 5); minimum.",
    },
    {
      id: "ps-5",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = 3x^2 + 6x - 2.",
      back: "Identify a = 3 and b = 6.\nAxis of symmetry: x = -6 / (2·3) = -6 / 6 = -1.\nNow plug in x = -1:\nf(-1) = 3(-1)^2 + 6(-1) - 2 = 3 - 6 - 2 = -5.\nVertex: (-1, -5).\nSince a = 3 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = -1; vertex (-1, -5); minimum.",
    },
    {
      id: "ps-6",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = -x^2 - 4x + 5.",
      back: "Identify a = -1 and b = -4.\nAxis of symmetry: x = -(-4) / (2·-1) = 4 / -2 = -2.\nNow plug in x = -2:\nf(-2) = -(-2)^2 - 4(-2) + 5 = -4 + 8 + 5 = 9.\nVertex: (-2, 9).\nSince a = -1 < 0, the parabola opens down.\n\nAnswer: axis of symmetry x = -2; vertex (-2, 9); maximum.",
    },
    {
      id: "ps-7",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = -4x^2 + 16x - 13.",
      back: "Identify a = -4 and b = 16.\nAxis of symmetry: x = -16 / (2·-4) = -16 / -8 = 2.\nNow plug in x = 2:\nf(2) = -4(2^2) + 16(2) - 13 = -16 + 32 - 13 = 3.\nVertex: (2, 3).\nSince a = -4 < 0, the parabola opens down.\n\nAnswer: axis of symmetry x = 2; vertex (2, 3); maximum.",
    },
    {
      id: "ps-8",
      topic: "standard-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = -x^2 + 4x + 5.",
      back: "Identify a = -1 and b = 4.\nAxis of symmetry: x = -4 / (2·-1) = -4 / -2 = 2.\nNow plug in x = 2:\nf(2) = -(2^2) + 4(2) + 5 = -4 + 8 + 5 = 9.\nVertex: (2, 9).\nSince a = -1 < 0, the parabola opens down.\n\nAnswer: axis of symmetry x = 2; vertex (2, 9); maximum.",
    },

    /* ---------- problems: vertex form ---------- */
    {
      id: "pv-1",
      topic: "vertex-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = -2(x + 3)^2 - 4.",
      back: "Use vertex form y = a(x - h)^2 + k.\nHere, f(x) = -2(x + 3)^2 - 4 = -2(x - (-3))^2 - 4.\nSo h = -3 and k = -4.\nVertex: (-3, -4).\nAxis of symmetry: x = -3.\nSince a = -2 < 0, the parabola opens down.\n\nAnswer: axis of symmetry x = -3; vertex (-3, -4); maximum.",
    },
    {
      id: "pv-2",
      topic: "vertex-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = 3(x - 1)^2 + 3.",
      back: "Use vertex form y = a(x - h)^2 + k.\nHere h = 1 and k = 3.\nVertex: (1, 3).\nAxis of symmetry: x = 1.\nSince a = 3 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = 1; vertex (1, 3); minimum.",
    },
    {
      id: "pv-3",
      topic: "vertex-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = (x + 5)^2 + 2.",
      back: "Rewrite mentally as (x - (-5))^2 + 2.\nSo h = -5 and k = 2.\nVertex: (-5, 2).\nAxis of symmetry: x = -5.\nSince a = 1 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = -5; vertex (-5, 2); minimum.",
    },
    {
      id: "pv-4",
      topic: "vertex-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = 3(x - 7)^2 - 8.",
      back: "This is vertex form with h = 7 and k = -8.\nVertex: (7, -8).\nAxis of symmetry: x = 7.\nSince a = 3 > 0, the parabola opens up.\n\nAnswer: axis of symmetry x = 7; vertex (7, -8); minimum.",
    },
    {
      id: "pv-5",
      topic: "vertex-form",
      type: "problem",
      front: "Find the axis of symmetry, vertex, and whether the vertex is a minimum or maximum for f(x) = -2(x - 4)^2 + 8.",
      back: "This is vertex form with h = 4 and k = 8.\nVertex: (4, 8).\nAxis of symmetry: x = 4.\nSince a = -2 < 0, the parabola opens down.\n\nAnswer: axis of symmetry x = 4; vertex (4, 8); maximum.",
    },

    /* ---------- mixed review ---------- */
    {
      id: "mx-1",
      topic: "mixed-review",
      type: "problem",
      front: "A quadratic is in standard form. What process should you use to find the vertex?",
      back: "Step 1: Identify a and b.\nStep 2: Use x = -b / (2a) to find the axis of symmetry.\nStep 3: Plug that x-value into the function.\nStep 4: The result gives the y-value of the vertex.",
    },
    {
      id: "mx-2",
      topic: "mixed-review",
      type: "problem",
      front: "A quadratic is in vertex form. What process should you use to find the vertex and axis of symmetry?",
      back: "Read them directly.\n\nIf y = a(x - h)^2 + k, then:\nVertex = (h, k)\nAxis of symmetry = x = h\nThen use the sign of a to decide minimum or maximum.",
    },
    {
      id: "mx-3",
      topic: "mixed-review",
      type: "problem",
      front: "For a quadratic, what are the three things you should always check after finding the vertex?",
      back: "1. Axis of symmetry\n2. Whether the parabola opens up or down\n3. Whether the vertex is a minimum or maximum\n\nThese three facts describe the graph clearly.",
    },
    {
      id: "mx-4",
      topic: "mixed-review",
      type: "problem",
      front: "In y = a(x - h)^2 + k, what common sign mistake do students make?",
      back: "They forget that the sign inside the parentheses is opposite the x-coordinate of the vertex.\n\nExample: (x + 3)^2 means x - (-3), so the vertex x-coordinate is -3, not 3.",
    },
  ];
})();