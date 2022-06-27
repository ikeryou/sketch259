uniform sampler2D tFront;
uniform sampler2D tBack;

varying vec3 vColor;
varying vec2 vUv;

void main(void) {
  vec2 uv = vUv;
  vec4 a = texture2D(tFront, uv);
  vec4 b = texture2D(tBack, uv);

  vec4 c = vec4(vec3(0.0), 0.0);
  vec4 dest = mix(a, b, vColor.x);

  gl_FragColor = dest;
}
