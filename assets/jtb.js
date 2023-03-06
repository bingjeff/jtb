let current_t = 0.0;
let time_delta = 0.005;
let old_index = 0;
let new_index = 1;
let drawing_scale = 1.0;

const vertices_glametrix_j = [
  [0.23711340206185566, -0.5],
  [-0.22680412371134018, -0.5],
  [-0.22680412371134018, -0.39690721649484545],
  [0.10309278350515466, -0.39690721649484545],
  [0.10309278350515466, 0.19072164948453607],
  [0.10309278350515466, 0.31443298969072164],
  [0.032164961038176565, 0.39690721649484534],
  [-0.07422680412371133, 0.39690721649484534],
  [-0.13433548445554122, 0.39690721649484534],
  [-0.18814700411767074, 0.37266990425660435],
  [-0.23711340206185566, 0.337808038770538],
  [-0.23711340206185566, 0.473828125],
  [-0.18365896952520938, 0.48938350087588595],
  [-0.1278366875402706, 0.5],
  [-0.07216494845360824, 0.5],
  [0.11340206185567014, 0.5],
  [0.23711340206185566, 0.37628865979381443],
  [0.23711340206185566, 0.19072164948453607],
];
const vertices_hussarbold_j = [
  [0.2678571428571429, -0.5],
  [0.04404761904761906, -0.5],
  [0.04404761904761906, -0.5],
  [0.04404761904761906, -0.5],
  [0.04404761904761906, 0.1476190476190476],
  [0.04404761904761906, 0.2464285714285714],
  [-0.004761904761904745, 0.2857142857142857],
  [-0.06904761904761905, 0.2857142857142857],
  [-0.1261904761904762, 0.2857142857142857],
  [-0.19642857142857145, 0.21904761904761905],
  [-0.19642857142857145, 0.21904761904761905],
  [-0.26785714285714285, 0.40595238095238095],
  [-0.26785714285714285, 0.40595238095238095],
  [-0.17857142857142858, 0.5],
  [-0.0380952380952381, 0.5],
  [0.15833333333333338, 0.5],
  [0.2678571428571429, 0.39761904761904765],
  [0.2678571428571429, 0.20476190476190476],
];
const vertices_mikodacs_j = [
  [0.19178082191780824, -0.5],
  [-0.1917808219178082, -0.5],
  [-0.1917808219178082, -0.30821917808219174],
  [-0.0821917808219178, -0.30821917808219174],
  [-0.0821917808219178, 0.2671232876712329],
  [-0.0821917808219178, 0.31095890410958904],
  [-0.10684931506849314, 0.3356164383561644],
  [-0.1506849315068493, 0.3356164383561644],
  [-0.16575342465753423, 0.3356164383561644],
  [-0.17945205479452053, 0.33150684931506846],
  [-0.1917808219178082, 0.32465753424657534],
  [-0.1917808219178082, 0.4876712328767123],
  [-0.16301369863013698, 0.4958904109589041],
  [-0.13150684931506848, 0.5],
  [-0.09589041095890409, 0.5],
  [0.09041095890410958, 0.5],
  [0.19178082191780824, 0.4328767123287671],
  [0.19178082191780824, 0.3082191780821918],
];
const vertices_resamitz_j = [
  [0.34490084985835695, -0.5],
  [-0.31657223796033995, -0.5],
  [-0.31657223796033995, -0.4263456090651558],
  [0.259915014164306, -0.4263456090651558],
  [0.259915014164306, 0.15155807365439095],
  [0.259915014164306, 0.3092917855670702],
  [0.1337960218910455, 0.4235127478753541],
  [-0.040368271954674184, 0.4235127478753541],
  [-0.1543895083851584, 0.4235127478753541],
  [-0.25163314430301653, 0.3927743711822769],
  [-0.3449008498583569, 0.3271954674220963],
  [-0.3449008498583569, 0.4178470254957507],
  [-0.25428754682243715, 0.4698164294191528],
  [-0.14376770538243622, 0.5],
  [-0.040368271954674184, 0.5],
  [0.18308783252921396, 0.5],
  [0.34490084985835695, 0.35365438056059667],
  [0.34490084985835695, 0.15155807365439095],
];

const vertices_glametrix_t = [
  [-0.3489583333333333, -0.5],
  [-0.3489583333333333, -0.39583333333333337],
  [-0.06770833333333331, -0.39583333333333337],
  [-0.06770833333333331, 0.5],
  [0.06770833333333331, 0.5],
  [0.06770833333333331, -0.39583333333333337],
  [0.34895833333333337, -0.39583333333333337],
  [0.34895833333333337, -0.5],
];
const vertices_hussarbold_t = [
  [-0.3515151515151515, -0.5],
  [-0.3515151515151515, -0.30000000000000004],
  [-0.11393939393939392, -0.30000000000000004],
  [-0.11393939393939392, 0.5],
  [0.11393939393939395, 0.5],
  [0.11393939393939395, -0.30000000000000004],
  [0.35151515151515156, -0.30000000000000004],
  [0.35151515151515156, -0.5],
];
const vertices_mikodacs_t = [
  [-0.3333333333333333, -0.5],
  [-0.3333333333333333, -0.3055555555555556],
  [-0.13888888888888887, -0.3055555555555556],
  [-0.13888888888888887, 0.5],
  [0.1388888888888889, 0.5],
  [0.1388888888888889, -0.3055555555555556],
  [0.33333333333333337, -0.3055555555555556],
  [0.33333333333333337, -0.5],
];
const vertices_resamitz_t = [
  [-0.4542857142857143, -0.5],
  [-0.4542857142857143, -0.4228571428571428],
  [-0.042857142857142816, -0.4228571428571428],
  [-0.042857142857142816, 0.5],
  [0.04285714285714287, 0.5],
  [0.04285714285714287, -0.4228571428571428],
  [0.45428571428571435, -0.4228571428571428],
  [0.45428571428571435, -0.5],
];

const vertices_glametrix_b = [
  [-0.3385416666666667, -0.5],
  [-0.3385416666666667, 0.5],
  [-0.026041666666666685, 0.5],
  [0.19270833333333337, 0.5],
  [0.33854166666666663, 0.39166666666666666],
  [0.33854166666666663, 0.22916666666666669],
  [0.33854166666666663, 0.22916666666666669],
  [0.33854166666666663, 0.22916666666666669],
  [0.33854166666666663, 0.10556042989095055],
  [0.2177770614624024, 0.0019812583923339844],
  [0.05598748524983721, -0.02462291717529297],
  [0.184279187520345, -0.05797080993652348],
  [0.27604166666666663, -0.14632918039957676],
  [0.27604166666666663, -0.25],
  [0.27604166666666663, -0.25],
  [0.27604166666666663, -0.4],
  [0.13854166666666667, -0.5],
  [-0.06770833333333331, -0.5],
  [-0.203125, 0.03125],
  [-0.036458333333333315, 0.03125],
  [0.09004166920979817, 0.03125],
  [0.19270833333333337, 0.11991666158040365],
  [0.19270833333333337, 0.22916666666666669],
  [0.19270833333333337, 0.22916666666666669],
  [0.19270833333333337, 0.32916666666666666],
  [0.10437501271565752, 0.3958333333333333],
  [-0.02812500000000001, 0.3958333333333333],
  [-0.203125, 0.3958333333333333],
  [-0.203125, -0.39583333333333337],
  [-0.06770833333333331, -0.39583333333333337],
  [0.06354166666666661, -0.39583333333333337],
  [0.15104166666666663, -0.3375],
  [0.15104166666666663, -0.25],
  [0.15104166666666663, -0.25],
  [0.15104166666666663, -0.15224997202555335],
  [0.05304168065388992, -0.07291666666666663],
  [-0.06770833333333331, -0.07291666666666663],
  [-0.203125, -0.07291666666666663],
];
const vertices_hussarbold_b = [
  [-0.3533333333333334, -0.5],
  [-0.3533333333333334, 0.5],
  [0.026060606060606062, 0.5],
  [0.23333333333333334, 0.5],
  [0.35333333333333333, 0.38606060606060605],
  [0.35333333333333333, 0.2212121212121212],
  [0.35333333333333333, 0.2212121212121212],
  [0.35333333333333333, 0.2212121212121212],
  [0.35333333333333333, 0.06],
  [0.26484848484848483, -0.009090909090909038],
  [0.13999999999999996, -0.030909090909090886],
  [0.2248484848484848, -0.07454545454545458],
  [0.26484848484848483, -0.15333333333333332],
  [0.26484848484848483, -0.24545454545454548],
  [0.26484848484848483, -0.24545454545454548],
  [0.26484848484848483, -0.4357575757575758],
  [0.1290909090909091, -0.5],
  [-0.04303030303030303, -0.5],
  [-0.12545454545454549, 0.08787878787878789],
  [-0.053939393939393954, 0.08787878787878789],
  [0.0539393939393939, 0.08787878787878789],
  [0.11333333333333334, 0.1206060606060606],
  [0.11333333333333334, 0.2127272727272727],
  [0.11333333333333334, 0.2127272727272727],
  [0.11333333333333334, 0.2915151515151515],
  [0.0539393939393939, 0.3242424242424242],
  [-0.053939393939393954, 0.3242424242424242],
  [-0.12545454545454549, 0.3242424242424242],
  [-0.12545454545454549, -0.3242424242424242],
  [-0.1072727272727273, -0.3242424242424242],
  [-0.00787878787878793, -0.3242424242424242],
  [0.044242424242424194, -0.29393939393939394],
  [0.044242424242424194, -0.2224242424242424],
  [0.044242424242424194, -0.2224242424242424],
  [0.044242424242424194, -0.1387878787878788],
  [-0.009090909090909094, -0.10848484848484852],
  [-0.1072727272727273, -0.10848484848484852],
  [-0.12545454545454549, -0.10848484848484852],
];
const vertices_mikodacs_b = [
  [-0.3333333333333333, -0.5],
  [-0.3333333333333333, 0.5],
  [0.013888888888888895, 0.5],
  [0.2472222222222223, 0.5],
  [0.3333333333333333, 0.45555555555555555],
  [0.3333333333333333, 0.3333333333333333],
  [0.3333333333333333, 0.3333333333333333],
  [0.3333333333333333, 0.125],
  [0.3333333333333333, 0.04444444444444445],
  [0.29583333333333334, -0.008333333333333304],
  [0.20277777777777778, -0.03472222222222221],
  [0.2888888888888889, -0.061111111111111116],
  [0.3194444444444445, -0.11527777777777781],
  [0.3194444444444445, -0.19444444444444442],
  [0.3194444444444445, -0.33333333333333337],
  [0.3194444444444445, -0.44166666666666665],
  [0.21250000000000008, -0.5],
  [0.013888888888888895, -0.5],
  [-0.055555555555555525, 0.06944444444444442],
  [0.013888888888888895, 0.06944444444444442],
  [0.0402777777777778, 0.06944444444444442],
  [0.05555555555555558, 0.09722222222222221],
  [0.05555555555555558, 0.1388888888888889],
  [0.05555555555555558, 0.26388888888888884],
  [0.05555555555555558, 0.3055555555555556],
  [0.0402777777777778, 0.3333333333333333],
  [0.013888888888888895, 0.3333333333333333],
  [-0.055555555555555525, 0.3333333333333333],
  [-0.055555555555555525, -0.33333333333333337],
  [0.013888888888888895, -0.33333333333333337],
  [0.0402777777777778, -0.33333333333333337],
  [0.05555555555555558, -0.3055555555555556],
  [0.05555555555555558, -0.26388888888888895],
  [0.05555555555555558, -0.19444444444444442],
  [0.05555555555555558, -0.1527777777777778],
  [0.0402777777777778, -0.125],
  [0.013888888888888895, -0.125],
  [-0.055555555555555525, -0.125],
];
const vertices_resamitz_b = [
  [-0.4385714285714286, -0.5],
  [-0.4385714285714286, 0.5],
  [0.15000000000000002, 0.5],
  [0.30929146902901783, 0.5],
  [0.4385714285714285, 0.3745605686732701],
  [0.4385714285714285, 0.21999999999999997],
  [0.4385714285714285, 0.21999999999999997],
  [0.4385714285714285, 0.21999999999999997],
  [0.4385714285714285, 0.11176286969866073],
  [0.37110430036272324, 0.01825714111328125],
  [0.27359427315848217, -0.025314287458147344],
  [0.3580742536272321, -0.0664699881417411],
  [0.4157142857142858, -0.14847712925502232],
  [0.4157142857142858, -0.24285714285714288],
  [0.4157142857142858, -0.24285714285714288],
  [0.4157142857142858, -0.3847999790736607],
  [0.29667428152901787, -0.5],
  [0.15000000000000002, -0.5],
  [-0.35285714285714287, 0.01428571428571429],
  [0.15000000000000002, 0.01428571428571429],
  [0.2619771030970982, 0.01428571428571429],
  [0.35285714285714287, 0.10644570486886162],
  [0.35285714285714287, 0.21999999999999997],
  [0.35285714285714287, 0.21999999999999997],
  [0.35285714285714287, 0.3319771466936384],
  [0.2619771030970982, 0.4228571428571429],
  [0.15000000000000002, 0.4228571428571429],
  [-0.35285714285714287, 0.4228571428571429],
  [-0.35285714285714287, -0.4228571428571428],
  [0.15000000000000002, -0.4228571428571428],
  [0.24936000279017856, -0.4228571428571428],
  [0.32999999999999996, -0.3422171456473214],
  [0.32999999999999996, -0.24285714285714288],
  [0.32999999999999996, -0.24285714285714288],
  [0.32999999999999996, -0.14349714006696423],
  [0.24936000279017856, -0.06285714285714283],
  [0.15000000000000002, -0.06285714285714283],
  [-0.35285714285714287, -0.06285714285714283],
];
const vertices_j = [
  vertices_glametrix_j,
  vertices_hussarbold_j,
  vertices_mikodacs_j,
  vertices_resamitz_j,
];

const vertices_t = [
  vertices_glametrix_t,
  vertices_hussarbold_t,
  vertices_mikodacs_t,
  vertices_resamitz_t,
];

const vertices_b = [
  vertices_glametrix_b,
  vertices_hussarbold_b,
  vertices_mikodacs_b,
  vertices_resamitz_b,
];

function interpolate(v0, v1, t) {
  if (t > 1.0) {
    t = 1.0;
  }
  const width = v1 - v0;
  return v0 + width * t;
}

function interpolatePoint(p0, p1, t) {
  return [interpolate(p0[0], p1[0], t), interpolate(p0[1], p1[1], t)];
}

function interpolateVertex(index, v0, v1, t) {
  const pt = interpolatePoint(v0[index], v1[index], t);
  vertex(pt[0], pt[1]);
}

function interpolateBezierVertex(i0, i1, i2, v0, v1, t) {
  const pt0 = interpolatePoint(v0[i0], v1[i0], t);
  const pt1 = interpolatePoint(v0[i1], v1[i1], t);
  const pt2 = interpolatePoint(v0[i2], v1[i2], t);
  bezierVertex(pt0[0], pt0[1], pt1[0], pt1[1], pt2[0], pt2[1]);
}

function draw_j(v0, v1, t) {
  beginShape();
  interpolateVertex(0, v0, v1, t);
  interpolateVertex(1, v0, v1, t);
  interpolateVertex(2, v0, v1, t);
  interpolateVertex(3, v0, v1, t);
  interpolateVertex(4, v0, v1, t);
  interpolateBezierVertex(5, 6, 7, v0, v1, t);
  interpolateBezierVertex(8, 9, 10, v0, v1, t);
  interpolateVertex(11, v0, v1, t);
  interpolateBezierVertex(12, 13, 14, v0, v1, t);
  interpolateBezierVertex(15, 16, 17, v0, v1, t);
  interpolateVertex(0, v0, v1, t);
  endShape();
}

function draw_t(v0, v1, t) {
  beginShape();
  interpolateVertex(0, v0, v1, t);
  interpolateVertex(1, v0, v1, t);
  interpolateVertex(2, v0, v1, t);
  interpolateVertex(3, v0, v1, t);
  interpolateVertex(4, v0, v1, t);
  interpolateVertex(5, v0, v1, t);
  interpolateVertex(6, v0, v1, t);
  interpolateVertex(7, v0, v1, t);
  interpolateVertex(0, v0, v1, t);
  endShape();
}

function draw_b(v0, v1, t) {
  beginShape();
  interpolateVertex(0, v0, v1, t);
  interpolateVertex(1, v0, v1, t);
  interpolateVertex(2, v0, v1, t);
  interpolateBezierVertex(3, 4, 5, v0, v1, t);
  interpolateVertex(6, v0, v1, t);
  interpolateVertex(7, v0, v1, t);
  interpolateBezierVertex(8, 9, 10, v0, v1, t);
  interpolateBezierVertex(11, 12, 13, v0, v1, t);
  interpolateVertex(14, v0, v1, t);
  interpolateBezierVertex(15, 16, 17, v0, v1, t);
  interpolateVertex(0, v0, v1, t);
  beginContour();
  interpolateVertex(18, v0, v1, t);
  interpolateVertex(19, v0, v1, t);
  interpolateBezierVertex(20, 21, 22, v0, v1, t);
  interpolateVertex(23, v0, v1, t);
  interpolateBezierVertex(24, 25, 26, v0, v1, t);
  interpolateVertex(27, v0, v1, t);
  interpolateVertex(18, v0, v1, t);
  endContour();
  beginContour();
  interpolateVertex(28, v0, v1, t);
  interpolateVertex(29, v0, v1, t);
  interpolateBezierVertex(30, 31, 32, v0, v1, t);
  interpolateVertex(33, v0, v1, t);
  interpolateBezierVertex(34, 35, 36, v0, v1, t);
  interpolateVertex(37, v0, v1, t);
  interpolateVertex(28, v0, v1, t);
  endContour();
  endShape();
}

function draw_connections(v0, v1) {
  for (let c = 11; c < 15; c++) {
    let p0 = v0[c];
    let p1 = v1[c];
    strokeWeight(0.01);
    stroke("green");
    point(p0[0], p0[1]);
    stroke("red");
    point(p1[0], p1[1]);

    strokeWeight(0.001);
    stroke(100);
    line(p0[0], p0[1], p1[0], p1[1]);
  }
}

function updateDrawingScale() {
  const original_h = 1.06;
  const original_w = 1.96;
  let width = 600;
  if (width < 0.8 * windowWidth) {
    width = 0.8 * windowWidth;
  }
  drawing_scale = width / original_w;
  let height = drawing_scale * original_h;
  if (height > 0.9 * windowHeight) {
    height = 0.9 * windowHeight;
    drawing_scale = height / original_h;
  }
}

function updateChangeVelocity() {
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  const speed = 0.001 * Math.sqrt(dx * dx + dy * dy);
  const default_speed = 0.005;
  time_delta = 0.5 * time_delta + 0.5 * (default_speed + speed);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateDrawingScale();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateDrawingScale();
}

function mouseClicked() {
  old_index = new_index;
  new_index += 1;
  if (new_index > vertices_b.length - 1) {
    new_index = 0;
  }
  current_t = 0.0;
}

function draw() {
  updateChangeVelocity();
  current_t += time_delta;
  if (current_t > 1.0) {
    mouseClicked();
  }

  clear();
  translate(0.5 * windowWidth, 0.5 * windowHeight);
  noStroke();
  rectMode(CENTER);
  fill(255, 255, 255);
  scale(drawing_scale);

  draw_t(vertices_t[old_index], vertices_t[new_index], current_t);

  translate(-0.52, 0);
  if (
    (new_index === 0 && current_t < 0.5) ||
    (new_index === 3 && current_t > 0.5)
  ) {
    erase();
    rect(0.0, 0, 0.5, 1.0);
    noErase();
  }
  draw_j(vertices_j[old_index], vertices_j[new_index], current_t);

  translate(1.16, 0);
  if (
    (new_index === 0 && current_t < 0.5) ||
    (new_index === 3 && current_t > 0.5)
  ) {
    erase();
    rect(-0.1, 0, 0.5, 1.0);
    noErase();
  }
  draw_b(vertices_b[old_index], vertices_b[new_index], current_t);
}
