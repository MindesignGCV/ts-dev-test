{ inputs, mkShell, system, fd, nodejs-17_x }:
mkShell
{
  nativeBuildInputs = [
    fd
    nodejs-17_x
  ];

  shellHook = ''
    export NIX_PATH="nixpkgs=${inputs.nixpkgs}"
    export PATH=$PWD/bin:$PATH
  '';
}
