import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Decke.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel_4.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel_5.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Kugel_6.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_antidamage_extr.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_antidamage_extr_Cap_19.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_antidamage_extr_Cap_22.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_Cylinder21.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_Vyta_en_.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_Vyta_en__Cap_17.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Boole2_Vyta_en__Cap_23.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_base_Cylinder10.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_pitchforkdown_Krychle.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_pitchforkdown_Symetrie_Krychle_11_Krychle_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_pitchforkdown_Symmetry1_screw.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_pitchforkdown_Trubka.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_stickright_stickright1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Symmetry_1_mot_Extrude1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Symmetry_1_mot_Extrude1_Cap_15.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Symmetry_1_mot_Extrude1_Cap_25.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Symmetry_1_mot_Tube1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_base_Symmetry_1_mot_Tube_12.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_leglow_Boole3_Extrude3.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_leglow_Boole3_longstick_low.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_leglow_Cube1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_leglow_Cylinder_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_leglow_Cylinder_2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_leglow_longstickbase.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_leglow_Tube3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Boole1_Extrude.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Boole1_longstick_low1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Boole_Extrude_3.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Boole_glass.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_010.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_125.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_225.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cube2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cylinder12.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_014.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_128.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_214.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cube.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cylinder3.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_020.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_129.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_27.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cube3.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cylinder29.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_023.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_126.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cube5.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cylinder31.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_024.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_123.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_25.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cube6.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cylinder20.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_021.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_121.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_213.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cube10.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cylinder26.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_08.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_16.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_224.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cube18.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cylinder1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_03.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_117.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_22.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cube25.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cylinder18.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_02.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_124.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_220.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cube31.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cylinder23.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_018.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_127.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_29.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cube30.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cylinder8.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_026.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_116.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_210.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cube29.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cylinder6.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_011.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_111.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_228.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cube28.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cylinder33.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_0.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_215.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cube27.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cylinder15.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_01.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_11.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_218.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cube26.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cylinder22.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_04.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_12.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_219.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cube24.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cylinder19.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_05.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_14.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_223.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cube23.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cylinder16.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_06.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_15.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_227.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cube22.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cylinder13.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_07.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_18.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_229.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cube21.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cylinder11.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_09.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_19.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_226.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cube20.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cylinder7.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_012.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_113.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_222.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cube19.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cylinder5.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_013.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_114.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_221.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cube17.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cylinder2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_015.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_118.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_217.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cube16.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cylinder.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_016.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_120.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_216.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cube15.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cylinder30.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_017.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_122.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_212.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cube14.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cylinder34.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_019.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_119.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_28.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cube13.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cylinder28.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_022.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_115.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_26.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cube12.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cylinder27.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_028.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_112.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_23.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cube11.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cylinder25.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_025.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_110.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_21.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cube9.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cylinder32.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_029.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_17.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_24.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cube8.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cylinder4.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_027.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_13.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_211.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cube7.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cylinder14.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_clip.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_clip_Rounding_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_clip_Rounding_1_Cap_14.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_clip_Rounding_21.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_clip_Rounding_21_Cap_26.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_Cube4.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_Cylinder24.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Cylinder_11.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_Cylinder_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_Extrude_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Extrude_1_Rounding_11.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Extrude_1_Rounding_11_Cap_12.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Extrude_1_Rounding_2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_Extrude_1_Rounding_2_Cap_27.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_glass1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_glass1_Cap_16.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_glass1_Cap_2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_longstickbase1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_Boole4_Extrude_2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_Boole4_switch_Extrude_31.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_Boole4_switch_Extrude_31_Cap_11.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_Boole4_switch_mainspace.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_clip1_Cylinder17.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_clip1_Extrude_21.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_clip1_Extrude_32.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_legup_mainswitch_Cylinder9.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_legup_Tube.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_fork_Cube_11_Cube_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_stick_stickright3_stickright2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2_Cap_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2_Cap_210.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Tube2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Tube_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_pichforkup_Symmetry_Tube_13.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.lamp_pichforkup_tri.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.lamp_Tube_11.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.TV.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Wand.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Wand_Fenster.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel10.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel11.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel11_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel1_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel1_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel2_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel3_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel4.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel4_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel4_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel4_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_0.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_0_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_10.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_10_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_11.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_11_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_12.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_12_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_13.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_13_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_14.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_14_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_15.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_15_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_16.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_16_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_17.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_17_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_18.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_18_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_19.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_19_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_1_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_1_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_20.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_20_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_21.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_21_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_22.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_22_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_23.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_23_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_24.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_24_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_25.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_25_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_26.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_26_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_2_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_2_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_3_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_4.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_4_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_5.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_5_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_6.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_6_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_7.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_7_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_8.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_8_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_9.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel5_9_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel6.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel6_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel6_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel7.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel7_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel7_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel7_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel8.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel9.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel9_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Würfel_4.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder4.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder5.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder6.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder_1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder_2.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Zylinder_3.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.верх1левый.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.верх_правый.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.держатель_стекла1.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.низ_стола.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.ножки.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.стекло.geometry} material={materials["default"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload("/room.glb");
