attribute vec3 rate;

varying vec2 vUv;
varying vec3 vColor;

void main(){
  vUv = uv;
  vColor = vec3(rate.x, rate.y, 0.0);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
