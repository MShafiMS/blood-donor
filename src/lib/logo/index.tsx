"use client";

import { MantineColorScheme } from "@mantine/core";

export interface LogoProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
  colorScheme: MantineColorScheme;
}

export const TextLogo = ({
  size = 40,
  colorScheme = "dark",
  ...others
}: LogoProps) => {
  return (
    <svg
      {...others}
      height={size}
      viewBox="0 0 531 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M156 122.98V59.8001C156 57.0641 156.936 54.8321 158.808 53.1041C160.752 51.3041 162.948 50.4041 165.396 50.4041H186.996C191.82 50.4041 196.248 50.98 200.28 52.132C204.384 53.212 207.948 54.976 210.972 57.424C213.996 59.8 216.372 62.8601 218.1 66.6041C219.828 70.2761 220.764 74.6681 220.908 79.7801C220.98 80.7881 221.016 82.0121 221.016 83.4521C221.016 84.8201 221.016 86.3681 221.016 88.0961C221.016 89.7521 221.016 91.2641 221.016 92.6321C221.016 94.0001 220.98 95.1881 220.908 96.1961C220.26 115.852 209.136 125.68 187.536 125.68H158.7C157.908 125.68 157.26 125.428 156.756 124.924C156.252 124.42 156 123.772 156 122.98ZM186.996 109.588C191.676 109.588 195.06 108.472 197.148 106.24C199.236 103.936 200.316 100.516 200.388 95.9801C200.46 94.9721 200.496 93.8201 200.496 92.5241C200.568 91.1561 200.604 89.6441 200.604 87.9881C200.604 86.3321 200.568 84.8561 200.496 83.5601C200.496 82.1921 200.46 81.0041 200.388 79.9961C200.172 70.9961 195.528 66.496 186.456 66.496H170.256C171.912 66.496 173.316 67.1081 174.468 68.3321C175.62 69.4841 176.196 70.744 176.196 72.112V106.24C176.196 107.176 176.484 107.968 177.06 108.616C177.708 109.264 178.536 109.588 179.544 109.588H186.996Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M264.945 126.76C254.721 126.76 246.657 124.276 240.753 119.308C234.849 114.34 231.717 107.032 231.357 97.384C231.285 95.368 231.249 92.272 231.249 88.096C231.249 83.92 231.285 80.788 231.357 78.7C231.645 69.196 234.777 61.888 240.753 56.776C246.801 51.592 254.865 49 264.945 49C274.953 49 282.945 51.592 288.921 56.776C294.969 61.888 298.137 69.196 298.425 78.7C298.569 82.876 298.641 86.008 298.641 88.096C298.641 90.256 298.569 93.352 298.425 97.384C298.065 107.032 294.933 114.34 289.029 119.308C283.197 124.276 275.169 126.76 264.945 126.76ZM264.945 110.56C268.689 110.56 271.677 109.444 273.909 107.212C276.141 104.908 277.329 101.416 277.473 96.736C277.617 92.56 277.689 89.572 277.689 87.772C277.689 85.972 277.617 83.056 277.473 79.024C277.329 74.344 276.141 70.888 273.909 68.656C271.677 66.352 268.689 65.2 264.945 65.2C261.129 65.2 258.105 66.352 255.873 68.656C253.641 70.888 252.453 74.344 252.309 79.024C252.237 81.04 252.201 83.956 252.201 87.772C252.201 91.66 252.237 94.648 252.309 96.736C252.453 101.416 253.641 104.908 255.873 107.212C258.105 109.444 261.129 110.56 264.945 110.56Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M311.147 122.656V59.4761C311.147 56.9561 312.047 54.7601 313.847 52.8881C315.647 51.0161 317.879 50.0801 320.543 50.0801H323.999C324.863 50.0801 325.835 50.2601 326.915 50.6201C327.995 50.9081 329.111 51.8441 330.263 53.4281C334.511 60.0521 338.327 66.0281 341.711 71.3561C343.799 74.5961 345.419 77.1881 346.571 79.1321C347.795 81.0041 348.911 82.7681 349.919 84.4241C350.999 86.0081 351.899 87.3761 352.619 88.5281C353.339 89.6801 353.771 90.3641 353.915 90.5801C354.059 90.7241 354.239 90.7961 354.455 90.7961C354.815 90.7961 354.995 90.6161 354.995 90.2561V59.4761C354.995 58.0361 355.247 56.7401 355.751 55.5881C356.327 54.4361 357.047 53.4641 357.911 52.6721C358.775 51.8801 359.783 51.2681 360.935 50.8361C362.087 50.3321 363.239 50.0801 364.391 50.0801H371.411C372.203 50.0801 372.815 50.3321 373.247 50.8361C373.751 51.3401 374.003 52.0241 374.003 52.8881V122.548C374.003 123.34 373.751 123.988 373.247 124.492C372.815 125.068 372.203 125.356 371.411 125.356H359.207C357.479 125.356 356.255 124.672 355.535 123.304C351.215 116.68 347.327 110.74 343.871 105.484C341.711 102.316 340.019 99.7961 338.795 97.9241C337.571 95.9801 336.419 94.2161 335.339 92.6321C334.331 90.9761 333.467 89.6081 332.747 88.5281C332.027 87.3761 331.595 86.6921 331.451 86.4761C331.235 86.2601 331.055 86.1521 330.911 86.1521C330.479 86.1521 330.263 86.3321 330.263 86.6921V122.656C330.263 123.52 330.011 124.204 329.507 124.708C329.003 125.14 328.319 125.356 327.455 125.356H313.847C313.127 125.356 312.479 125.104 311.903 124.6C311.399 124.024 311.147 123.376 311.147 122.656Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M420.195 126.76C409.971 126.76 401.907 124.276 396.003 119.308C390.099 114.34 386.967 107.032 386.607 97.384C386.535 95.368 386.499 92.272 386.499 88.096C386.499 83.92 386.535 80.788 386.607 78.7C386.895 69.196 390.027 61.888 396.003 56.776C402.051 51.592 410.115 49 420.195 49C430.203 49 438.195 51.592 444.171 56.776C450.219 61.888 453.387 69.196 453.675 78.7C453.819 82.876 453.891 86.008 453.891 88.096C453.891 90.256 453.819 93.352 453.675 97.384C453.315 107.032 450.183 114.34 444.279 119.308C438.447 124.276 430.419 126.76 420.195 126.76ZM420.195 110.56C423.939 110.56 426.927 109.444 429.159 107.212C431.391 104.908 432.579 101.416 432.723 96.736C432.867 92.56 432.939 89.572 432.939 87.772C432.939 85.972 432.867 83.056 432.723 79.024C432.579 74.344 431.391 70.888 429.159 68.656C426.927 66.352 423.939 65.2 420.195 65.2C416.379 65.2 413.355 66.352 411.123 68.656C408.891 70.888 407.703 74.344 407.559 79.024C407.487 81.04 407.451 83.956 407.451 87.772C407.451 91.66 407.487 94.648 407.559 96.736C407.703 101.416 408.891 104.908 411.123 107.212C413.355 109.444 416.379 110.56 420.195 110.56Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M529.901 124.816C529.469 125.248 528.929 125.464 528.281 125.464H513.161C511.073 125.464 509.597 124.492 508.733 122.548L497.825 100.948C497.177 99.796 496.205 99.22 494.909 99.22H480.653C482.525 99.22 483.965 99.868 484.973 101.164C486.053 102.46 486.593 103.72 486.593 104.944V122.764C486.593 123.628 486.341 124.312 485.837 124.816C485.333 125.248 484.649 125.464 483.785 125.464H469.097C468.305 125.464 467.657 125.212 467.153 124.708C466.649 124.204 466.397 123.556 466.397 122.764V59.584C466.397 56.92 467.333 54.688 469.205 52.888C471.077 51.088 473.273 50.188 475.793 50.188H498.689C502.721 50.188 506.537 50.656 510.137 51.592C513.809 52.456 517.013 53.86 519.749 55.804C522.485 57.748 524.681 60.304 526.337 63.472C527.993 66.568 528.821 70.348 528.821 74.812C528.821 79.276 527.885 83.2 526.013 86.584C524.213 89.968 521.333 92.74 517.373 94.9C516.797 95.332 516.509 95.8 516.509 96.304C516.509 96.808 516.581 97.204 516.725 97.492L530.225 122.008C530.441 122.44 530.549 122.836 530.549 123.196C530.549 123.7 530.333 124.24 529.901 124.816ZM507.977 74.704C507.977 71.752 507.113 69.52 505.385 68.008C503.729 66.424 501.461 65.632 498.581 65.632H480.005C481.733 65.632 483.137 66.28 484.217 67.576C485.297 68.8 485.837 70.096 485.837 71.464V80.104C485.837 81.04 486.161 81.832 486.809 82.48C487.457 83.128 488.249 83.452 489.185 83.452H498.581C501.461 83.452 503.729 82.732 505.385 81.292C507.113 79.852 507.977 77.656 507.977 74.704Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M48.1121 0C51.0582 1.19384 51.4141 1.60878 53.0199 4.26448C53.6175 5.24959 53.6175 5.24959 54.2272 6.2546C56.3018 9.8184 58.3178 13.4137 60.3036 17.0327C63.1371 22.1884 65.9767 27.336 68.9112 32.4291C70.1332 34.5508 71.347 36.6776 72.5605 38.8046C73.1547 39.8406 73.7528 40.8742 74.3549 41.9052C75.2002 43.3539 76.0314 44.8107 76.86 46.2699C77.3426 47.1052 77.8251 47.9405 78.3223 48.8012C79.4262 51.4968 79.4416 52.4012 78.495 55.1296C77.6361 56.8648 76.7142 58.5662 75.7531 60.2413C75.4771 60.7278 75.2012 61.2143 74.9169 61.7156C74.0349 63.2695 73.1458 64.8187 72.2552 66.3672C61.1475 84.6172 61.1475 84.6172 59.6497 105.645C62.1731 115.51 67.8387 122.992 76.2391 128.098C77.3558 128.697 77.3558 128.697 78.495 129.308C76.0437 133.076 73.4784 134.745 69.6633 136.665C69.1149 136.943 68.5664 137.222 68.0014 137.509C55.2653 143.787 42.4958 143.673 29.3447 138.983C22.9578 136.201 18.0796 131.985 13.2173 126.889C12.4689 126.117 12.4689 126.117 11.7054 125.33C4.65937 117.527 0.963473 106.855 0.161781 96.25C0.121193 95.7262 0.0806043 95.2023 0.0387858 94.6626C-0.430143 83.1894 3.40725 73.7495 8.60948 63.9987C8.9353 63.382 9.26112 62.7653 9.59682 62.1298C14.6812 52.5424 20.0304 43.1152 25.3828 33.6908C28.0716 28.9486 30.7277 24.1913 33.3226 19.3917C33.5829 18.9117 33.8432 18.4317 34.1114 17.9371C35.3563 15.6409 36.5951 13.3415 37.8234 11.0354C43.5094 0.527158 43.5094 0.527157 48.1121 0ZM17.2942 91.9855C15.4315 95.4063 16.3683 98.9701 17.0572 102.7C19.4489 111.515 24.305 117.961 31.6487 122.857C35.8905 125.166 39.8546 126.81 44.7042 126.082C46.3536 125.359 46.3536 125.359 47.0081 123.664C46.791 121.777 46.5374 119.894 46.2401 118.02C45.5264 117.785 44.8126 117.55 44.0772 117.308C37.0391 114.858 31.2696 112.463 27.6288 105.223C26.6133 102.259 26.2973 99.1831 25.9579 96.0642C25.4617 93.6185 24.8577 92.3871 23.201 90.606C20.5573 90.1434 19.2322 89.9274 17.2942 91.9855Z"
        fill="#D81D48"
      />
      <path
        d="M92.3191 48.6794C94.6934 51.4937 96.5034 54.525 98.3039 57.7658C98.571 58.2447 98.8381 58.7237 99.1133 59.2171C99.9717 60.7586 100.826 62.3029 101.679 63.8476C102.267 64.9074 102.855 65.9672 103.443 67.0268C105.116 70.0456 106.782 73.0688 108.447 76.093C108.866 76.8533 109.285 77.6136 109.717 78.3969C110.707 80.1958 111.691 81.998 112.67 83.8031C113.079 84.5488 113.079 84.5488 113.496 85.3095C117.057 91.9484 117.077 100.076 115.682 107.475C113.174 114.993 107.964 120.535 101.295 124.117C94.5096 127.404 86.9823 128.421 79.7466 126.035C71.9419 122.184 67.2077 117.133 63.8352 108.839C61.0325 100.39 62.5218 93.1788 65.4401 84.9621C66.9323 81.737 68.6467 78.6941 70.4319 75.6395C70.9015 74.8182 71.3712 73.997 71.855 73.1509C72.8204 71.4642 73.7897 69.78 74.763 68.0983C76.146 65.6909 77.4968 63.267 78.8376 60.8335C79.6515 59.3688 80.4654 57.9043 81.2795 56.4399C81.8371 55.4194 81.8371 55.4194 82.406 54.3783C82.7569 53.7553 83.1079 53.1322 83.4695 52.4903C83.771 51.9464 84.0726 51.4024 84.3833 50.8419C86.6206 47.8789 89.0095 47.3763 92.3191 48.6794ZM78.6396 96.3005C77.1829 98.7958 77.4038 100.641 77.7277 103.507C79.7288 107.408 81.7472 109.963 85.7434 111.469C88.376 111.603 89.5183 110.87 91.5512 109.151C92.4624 107.173 92.4274 106.312 91.8392 104.212C90.8598 102.521 90.8598 102.521 88.8633 101.944C86.9433 101.088 86.9433 101.088 86.0314 99.0721C85.7225 98.0743 85.7225 98.0743 85.4074 97.0564C84.0081 95.2586 84.0081 95.2586 81.9995 95.1918C80.0497 95.3025 80.0497 95.3025 78.6396 96.3005Z"
        fill="#D81D48"
      />
    </svg>
  );
};

export const TextLogoVert = ({
  size = 40,
  colorScheme = "dark",
  ...others
}: LogoProps) => {
  return (
    <svg
      {...others}
      height={size}
      viewBox="0 0 375 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 262.98V199.8C0 197.064 0.936014 194.832 2.80801 193.104C4.75201 191.304 6.94801 190.404 9.39601 190.404H30.996C35.82 190.404 40.248 190.98 44.28 192.132C48.384 193.212 51.948 194.976 54.972 197.424C57.996 199.8 60.372 202.86 62.1 206.604C63.828 210.276 64.764 214.668 64.908 219.78C64.98 220.788 65.016 222.012 65.016 223.452C65.016 224.82 65.016 226.368 65.016 228.096C65.016 229.752 65.016 231.264 65.016 232.632C65.016 234 64.98 235.188 64.908 236.196C64.26 255.852 53.136 265.68 31.536 265.68H2.69998C1.90798 265.68 1.26 265.428 0.755997 264.924C0.251997 264.42 0 263.772 0 262.98ZM30.996 249.588C35.676 249.588 39.06 248.472 41.148 246.24C43.236 243.936 44.316 240.516 44.388 235.98C44.46 234.972 44.496 233.82 44.496 232.524C44.568 231.156 44.604 229.644 44.604 227.988C44.604 226.332 44.568 224.856 44.496 223.56C44.496 222.192 44.46 221.004 44.388 219.996C44.172 210.996 39.528 206.496 30.456 206.496H14.256C15.912 206.496 17.316 207.108 18.468 208.332C19.62 209.484 20.196 210.744 20.196 212.112V246.24C20.196 247.176 20.484 247.968 21.06 248.616C21.708 249.264 22.536 249.588 23.544 249.588H30.996Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M108.945 266.76C98.721 266.76 90.657 264.276 84.753 259.308C78.849 254.34 75.717 247.032 75.357 237.384C75.285 235.368 75.249 232.272 75.249 228.096C75.249 223.92 75.285 220.788 75.357 218.7C75.645 209.196 78.777 201.888 84.753 196.776C90.801 191.592 98.865 189 108.945 189C118.953 189 126.945 191.592 132.921 196.776C138.969 201.888 142.137 209.196 142.425 218.7C142.569 222.876 142.641 226.008 142.641 228.096C142.641 230.256 142.569 233.352 142.425 237.384C142.065 247.032 138.933 254.34 133.029 259.308C127.197 264.276 119.169 266.76 108.945 266.76ZM108.945 250.56C112.689 250.56 115.677 249.444 117.909 247.212C120.141 244.908 121.329 241.416 121.473 236.736C121.617 232.56 121.689 229.572 121.689 227.772C121.689 225.972 121.617 223.056 121.473 219.024C121.329 214.344 120.141 210.888 117.909 208.656C115.677 206.352 112.689 205.2 108.945 205.2C105.129 205.2 102.105 206.352 99.873 208.656C97.641 210.888 96.453 214.344 96.309 219.024C96.237 221.04 96.201 223.956 96.201 227.772C96.201 231.66 96.237 234.648 96.309 236.736C96.453 241.416 97.641 244.908 99.873 247.212C102.105 249.444 105.129 250.56 108.945 250.56Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M155.147 262.656V199.476C155.147 196.956 156.047 194.76 157.847 192.888C159.647 191.016 161.879 190.08 164.543 190.08H167.999C168.863 190.08 169.835 190.26 170.915 190.62C171.995 190.908 173.111 191.844 174.263 193.428C178.511 200.052 182.327 206.028 185.711 211.356C187.799 214.596 189.419 217.188 190.571 219.132C191.795 221.004 192.911 222.768 193.919 224.424C194.999 226.008 195.899 227.376 196.619 228.528C197.339 229.68 197.771 230.364 197.915 230.58C198.059 230.724 198.239 230.796 198.455 230.796C198.815 230.796 198.995 230.616 198.995 230.256V199.476C198.995 198.036 199.247 196.74 199.751 195.588C200.327 194.436 201.047 193.464 201.911 192.672C202.775 191.88 203.783 191.268 204.935 190.836C206.087 190.332 207.239 190.08 208.391 190.08H215.411C216.203 190.08 216.815 190.332 217.247 190.836C217.751 191.34 218.003 192.024 218.003 192.888V262.548C218.003 263.34 217.751 263.988 217.247 264.492C216.815 265.068 216.203 265.356 215.411 265.356H203.207C201.479 265.356 200.255 264.672 199.535 263.304C195.215 256.68 191.327 250.74 187.871 245.484C185.711 242.316 184.019 239.796 182.795 237.924C181.571 235.98 180.419 234.216 179.339 232.632C178.331 230.976 177.467 229.608 176.747 228.528C176.027 227.376 175.595 226.692 175.451 226.476C175.235 226.26 175.055 226.152 174.911 226.152C174.479 226.152 174.263 226.332 174.263 226.692V262.656C174.263 263.52 174.011 264.204 173.507 264.708C173.003 265.14 172.319 265.356 171.455 265.356H157.847C157.127 265.356 156.479 265.104 155.903 264.6C155.399 264.024 155.147 263.376 155.147 262.656Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M264.195 266.76C253.971 266.76 245.907 264.276 240.003 259.308C234.099 254.34 230.967 247.032 230.607 237.384C230.535 235.368 230.499 232.272 230.499 228.096C230.499 223.92 230.535 220.788 230.607 218.7C230.895 209.196 234.027 201.888 240.003 196.776C246.051 191.592 254.115 189 264.195 189C274.203 189 282.195 191.592 288.171 196.776C294.219 201.888 297.387 209.196 297.675 218.7C297.819 222.876 297.891 226.008 297.891 228.096C297.891 230.256 297.819 233.352 297.675 237.384C297.315 247.032 294.183 254.34 288.279 259.308C282.447 264.276 274.419 266.76 264.195 266.76ZM264.195 250.56C267.939 250.56 270.927 249.444 273.159 247.212C275.391 244.908 276.579 241.416 276.723 236.736C276.867 232.56 276.939 229.572 276.939 227.772C276.939 225.972 276.867 223.056 276.723 219.024C276.579 214.344 275.391 210.888 273.159 208.656C270.927 206.352 267.939 205.2 264.195 205.2C260.379 205.2 257.355 206.352 255.123 208.656C252.891 210.888 251.703 214.344 251.559 219.024C251.487 221.04 251.451 223.956 251.451 227.772C251.451 231.66 251.487 234.648 251.559 236.736C251.703 241.416 252.891 244.908 255.123 247.212C257.355 249.444 260.379 250.56 264.195 250.56Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M373.901 264.816C373.469 265.248 372.929 265.464 372.281 265.464H357.161C355.073 265.464 353.597 264.492 352.733 262.548L341.825 240.948C341.177 239.796 340.205 239.22 338.909 239.22H324.653C326.525 239.22 327.965 239.868 328.973 241.164C330.053 242.46 330.593 243.72 330.593 244.944V262.764C330.593 263.628 330.341 264.312 329.837 264.816C329.333 265.248 328.649 265.464 327.785 265.464H313.097C312.305 265.464 311.657 265.212 311.153 264.708C310.649 264.204 310.397 263.556 310.397 262.764V199.584C310.397 196.92 311.333 194.688 313.205 192.888C315.077 191.088 317.273 190.188 319.793 190.188H342.689C346.721 190.188 350.537 190.656 354.137 191.592C357.809 192.456 361.013 193.86 363.749 195.804C366.485 197.748 368.681 200.304 370.337 203.472C371.993 206.568 372.821 210.348 372.821 214.812C372.821 219.276 371.885 223.2 370.013 226.584C368.213 229.968 365.333 232.74 361.373 234.9C360.797 235.332 360.509 235.8 360.509 236.304C360.509 236.808 360.581 237.204 360.725 237.492L374.225 262.008C374.441 262.44 374.549 262.836 374.549 263.196C374.549 263.7 374.333 264.24 373.901 264.816ZM351.977 214.704C351.977 211.752 351.113 209.52 349.385 208.008C347.729 206.424 345.461 205.632 342.581 205.632H324.005C325.733 205.632 327.137 206.28 328.217 207.576C329.297 208.8 329.837 210.096 329.837 211.464V220.104C329.837 221.04 330.161 221.832 330.809 222.48C331.457 223.128 332.249 223.452 333.185 223.452H342.581C345.461 223.452 347.729 222.732 349.385 221.292C351.113 219.852 351.977 217.656 351.977 214.704Z"
        fill={colorScheme === "light" ? "#232323" : "#FFFFFF"}
      />
      <path
        d="M177.112 0C180.058 1.19384 180.414 1.60878 182.02 4.26448C182.617 5.24959 182.617 5.24959 183.227 6.2546C185.302 9.8184 187.318 13.4137 189.304 17.0327C192.137 22.1884 194.977 27.336 197.911 32.4291C199.133 34.5508 200.347 36.6776 201.561 38.8046C202.155 39.8406 202.753 40.8742 203.355 41.9052C204.2 43.3539 205.031 44.8107 205.86 46.2699C206.343 47.1052 206.825 47.9405 207.322 48.8012C208.426 51.4968 208.442 52.4012 207.495 55.1296C206.636 56.8648 205.714 58.5662 204.753 60.2413C204.477 60.7278 204.201 61.2143 203.917 61.7156C203.035 63.2695 202.146 64.8187 201.255 66.3672C190.148 84.6172 190.148 84.6172 188.65 105.645C191.173 115.51 196.839 122.992 205.239 128.098C206.356 128.697 206.356 128.697 207.495 129.308C205.044 133.076 202.478 134.745 198.663 136.665C198.115 136.943 197.566 137.222 197.001 137.509C184.265 143.787 171.496 143.673 158.345 138.983C151.958 136.201 147.08 131.985 142.217 126.889C141.469 126.117 141.469 126.117 140.705 125.33C133.659 117.527 129.963 106.855 129.162 96.25C129.121 95.7262 129.081 95.2023 129.039 94.6626C128.57 83.1894 132.407 73.7495 137.609 63.9987C137.935 63.382 138.261 62.7653 138.597 62.1298C143.681 52.5424 149.03 43.1152 154.383 33.6908C157.072 28.9486 159.728 24.1913 162.323 19.3917C162.583 18.9117 162.843 18.4317 163.111 17.9371C164.356 15.6409 165.595 13.3415 166.823 11.0354C172.509 0.527158 172.509 0.527157 177.112 0ZM146.294 91.9855C144.432 95.4063 145.368 98.9701 146.057 102.7C148.449 111.515 153.305 117.961 160.649 122.857C164.891 125.166 168.855 126.81 173.704 126.082C175.354 125.359 175.354 125.359 176.008 123.664C175.791 121.777 175.537 119.894 175.24 118.02C174.526 117.785 173.813 117.55 173.077 117.308C166.039 114.858 160.27 112.463 156.629 105.223C155.613 102.259 155.297 99.1831 154.958 96.0642C154.462 93.6185 153.858 92.3871 152.201 90.606C149.557 90.1434 148.232 89.9274 146.294 91.9855Z"
        fill="#D81D48"
      />
      <path
        d="M221.319 48.6794C223.693 51.4937 225.503 54.525 227.304 57.7658C227.571 58.2447 227.838 58.7237 228.113 59.2171C228.972 60.7586 229.826 62.3029 230.679 63.8476C231.267 64.9074 231.855 65.9672 232.443 67.0268C234.116 70.0456 235.782 73.0688 237.447 76.093C237.866 76.8533 238.285 77.6136 238.717 78.3969C239.707 80.1958 240.691 81.998 241.67 83.8031C242.079 84.5488 242.079 84.5488 242.496 85.3095C246.057 91.9484 246.077 100.076 244.682 107.475C242.174 114.993 236.964 120.535 230.295 124.117C223.51 127.404 215.982 128.421 208.747 126.035C200.942 122.184 196.208 117.133 192.835 108.839C190.032 100.39 191.522 93.1788 194.44 84.9621C195.932 81.737 197.647 78.6941 199.432 75.6395C199.902 74.8182 200.371 73.997 200.855 73.1509C201.82 71.4642 202.79 69.78 203.763 68.0983C205.146 65.6909 206.497 63.267 207.838 60.8335C208.651 59.3688 209.465 57.9043 210.28 56.4399C210.837 55.4194 210.837 55.4194 211.406 54.3783C211.757 53.7553 212.108 53.1322 212.469 52.4903C212.771 51.9464 213.073 51.4024 213.383 50.8419C215.621 47.8789 218.009 47.3763 221.319 48.6794ZM207.64 96.3005C206.183 98.7958 206.404 100.641 206.728 103.507C208.729 107.408 210.747 109.963 214.743 111.469C217.376 111.603 218.518 110.87 220.551 109.151C221.462 107.173 221.427 106.312 220.839 104.212C219.86 102.521 219.86 102.521 217.863 101.944C215.943 101.088 215.943 101.088 215.031 99.0721C214.723 98.0743 214.723 98.0743 214.407 97.0564C213.008 95.2586 213.008 95.2586 211 95.1918C209.05 95.3025 209.05 95.3025 207.64 96.3005Z"
        fill="#D81D48"
      />
    </svg>
  );
};

export const IconLogo = ({ size = 40, ...others }: LogoProps) => {
  return (
    <svg
      {...others}
      height={size}
      viewBox="0 0 117 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.1121 0C51.0582 1.19384 51.4141 1.60878 53.0199 4.26448C53.6175 5.24959 53.6175 5.24959 54.2272 6.2546C56.3018 9.8184 58.3178 13.4137 60.3036 17.0327C63.1371 22.1884 65.9767 27.336 68.9112 32.4291C70.1332 34.5508 71.347 36.6776 72.5605 38.8046C73.1547 39.8406 73.7528 40.8742 74.3549 41.9052C75.2002 43.3539 76.0314 44.8107 76.86 46.2699C77.3426 47.1052 77.8251 47.9405 78.3223 48.8012C79.4262 51.4968 79.4416 52.4012 78.495 55.1296C77.6361 56.8648 76.7142 58.5662 75.7531 60.2413C75.4771 60.7278 75.2012 61.2143 74.9169 61.7156C74.0349 63.2695 73.1458 64.8187 72.2552 66.3672C61.1475 84.6172 61.1475 84.6172 59.6497 105.645C62.1731 115.51 67.8387 122.992 76.2391 128.098C77.3558 128.697 77.3558 128.697 78.495 129.308C76.0437 133.076 73.4784 134.745 69.6633 136.665C69.1149 136.943 68.5664 137.222 68.0014 137.509C55.2653 143.787 42.4958 143.673 29.3447 138.983C22.9578 136.201 18.0796 131.985 13.2173 126.889C12.4689 126.117 12.4689 126.117 11.7054 125.33C4.65937 117.527 0.963473 106.855 0.161781 96.25C0.121193 95.7262 0.0806043 95.2023 0.0387858 94.6626C-0.430143 83.1894 3.40725 73.7495 8.60948 63.9987C8.9353 63.382 9.26112 62.7653 9.59682 62.1298C14.6812 52.5424 20.0304 43.1152 25.3828 33.6908C28.0716 28.9486 30.7277 24.1913 33.3226 19.3917C33.5829 18.9117 33.8432 18.4317 34.1114 17.9371C35.3563 15.6409 36.5951 13.3415 37.8234 11.0354C43.5094 0.527158 43.5094 0.527157 48.1121 0ZM17.2942 91.9855C15.4315 95.4063 16.3683 98.9701 17.0572 102.7C19.4489 111.515 24.305 117.961 31.6487 122.857C35.8905 125.166 39.8546 126.81 44.7042 126.082C46.3536 125.359 46.3536 125.359 47.0081 123.664C46.791 121.777 46.5374 119.894 46.2401 118.02C45.5264 117.785 44.8126 117.55 44.0772 117.308C37.0391 114.858 31.2696 112.463 27.6288 105.223C26.6133 102.259 26.2973 99.1831 25.9579 96.0642C25.4617 93.6185 24.8577 92.3871 23.201 90.606C20.5573 90.1434 19.2322 89.9274 17.2942 91.9855Z"
        fill="#D81D48"
      />
      <path
        d="M92.3191 48.6794C94.6934 51.4937 96.5034 54.525 98.3039 57.7658C98.571 58.2447 98.8381 58.7237 99.1133 59.2171C99.9717 60.7586 100.826 62.3029 101.679 63.8476C102.267 64.9074 102.855 65.9672 103.443 67.0268C105.116 70.0456 106.782 73.0688 108.447 76.093C108.866 76.8533 109.285 77.6136 109.717 78.3969C110.707 80.1958 111.691 81.998 112.67 83.8031C113.079 84.5488 113.079 84.5488 113.496 85.3095C117.057 91.9484 117.077 100.076 115.682 107.475C113.174 114.993 107.964 120.535 101.295 124.117C94.5096 127.404 86.9823 128.421 79.7466 126.035C71.9419 122.184 67.2077 117.133 63.8352 108.839C61.0325 100.39 62.5218 93.1788 65.4401 84.9621C66.9323 81.737 68.6467 78.6941 70.4319 75.6395C70.9015 74.8182 71.3712 73.997 71.855 73.1509C72.8204 71.4642 73.7897 69.78 74.763 68.0983C76.146 65.6909 77.4968 63.267 78.8376 60.8335C79.6515 59.3688 80.4654 57.9043 81.2795 56.4399C81.8371 55.4194 81.8371 55.4194 82.406 54.3783C82.7569 53.7553 83.1079 53.1322 83.4695 52.4903C83.771 51.9464 84.0726 51.4024 84.3833 50.8419C86.6206 47.8789 89.0095 47.3763 92.3191 48.6794ZM78.6396 96.3005C77.1829 98.7958 77.4038 100.641 77.7277 103.507C79.7288 107.408 81.7472 109.963 85.7434 111.469C88.376 111.603 89.5183 110.87 91.5512 109.151C92.4624 107.173 92.4274 106.312 91.8392 104.212C90.8598 102.521 90.8598 102.521 88.8633 101.944C86.9433 101.088 86.9433 101.088 86.0314 99.0721C85.7225 98.0743 85.7225 98.0743 85.4074 97.0564C84.0081 95.2586 84.0081 95.2586 81.9995 95.1918C80.0497 95.3025 80.0497 95.3025 78.6396 96.3005Z"
        fill="#D81D48"
      />
    </svg>
  );
};
