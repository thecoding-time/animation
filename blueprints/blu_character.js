import { ease_in_out_quart, ease_out_quart } from "../../common/easing.js";
import { from_euler } from "../../common/quat.js";
import { element } from "../../common/random.js";
import { animate, AnimationFlag } from "../components/com_animate.js";
import { render_colored_diffuse } from "../components/com_render1.js";
let shirt_colors = [
    [1, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
];
let skin_colors = [
    [1, 0.8, 0.6, 1],
    [0.6, 0.4, 0, 1],
];
let hair_colors = [
    [1, 1, 0, 1],
    [0, 0, 0, 1],
    [0.6, 0.4, 0, 1],
    [0.4, 0, 0, 1],
];
let pants_colors = [
    [0, 0, 0, 1],
    [0.53, 0, 0, 1],
    [0.6, 0.4, 0.2, 1],
    [0.33, 0.33, 0.33, 1],
];
export function blueprint_character(game) {
    let skin_color = element(skin_colors);
    let hair_color = element(hair_colors);
    let shirt_color = element(shirt_colors);
    let pants_color = element(pants_colors);
    return {
        Children: [
            {
                // spine
                Using: [
                    animate({
                        idle: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Rotation: from_euler([0, 0, 0, 1], 0, 5, 0),
                                },
                                {
                                    Timestamp: 0.5,
                                    Rotation: from_euler([0, 0, 0, 1], 0, -5, 0),
                                },
                            ],
                        },
                        walk: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Rotation: from_euler([0, 0, 0, 1], 0, 5, 0),
                                },
                                {
                                    Timestamp: 0.2,
                                    Rotation: from_euler([0, 0, 0, 1], 0, -5, 0),
                                },
                            ],
                        },
                        jump: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Translation: [0, 0, 0],
                                    Rotation: [0, 0, 0, 1],
                                },
                                {
                                    Timestamp: 0.2,
                                    Translation: [0, 2, 0],
                                    Rotation: from_euler([0, 0, 0, 1], -15, 0, 0),
                                    Ease: ease_in_out_quart,
                                },
                                {
                                    Timestamp: 0.4,
                                    Translation: [0, 0, 0],
                                    Rotation: from_euler([0, 0, 0, 1], 0, 0, 0),
                                    Ease: ease_out_quart,
                                },
                            ],
                            Flags: AnimationFlag.None,
                        },
                    }),
                ],
                Children: [
                    {
                        // head
                        Translation: [0, 1.5, 0.5],
                        Scale: [2, 2, 2],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, skin_color),
                        ],
                    },
                    {
                        // hair
                        Translation: [0, 2, 0],
                        Scale: [2.1, 1.1, 1.1],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, hair_color),
                        ],
                    },
                    {
                        // body
                        Translation: [0, -1, 0],
                        Scale: [2, 3, 1],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, shirt_color),
                        ],
                    },
                ],
            },
            {
                // left shoulder
                Translation: [1.5, 0, 0],
                Using: [
                    animate({
                        idle: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], 5, 0, 0),
                                },
                                {
                                    Timestamp: 0.5,
                                    Rotation: from_euler([0, 0, 0, 1], -5, 0, 0),
                                },
                            ],
                        },
                        walk: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], 30, 0, 0),
                                },
                                {
                                    Timestamp: 0.2,
                                    Rotation: from_euler([0, 0, 0, 1], -60, 0, 0),
                                },
                            ],
                        },
                        jump: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Translation: [1.5, 0, 0],
                                    Rotation: [0, 0, 0, 1],
                                },
                                {
                                    Timestamp: 0.2,
                                    Translation: [1.5, 2, 0],
                                    Rotation: from_euler([0, 0, 0, 1], 0, 0, 135),
                                    Ease: ease_in_out_quart,
                                },
                                {
                                    Timestamp: 0.4,
                                    Translation: [1.5, 0, 0],
                                    Rotation: [0, 0, 0, 1],
                                    Ease: ease_out_quart,
                                },
                            ],
                            Flags: AnimationFlag.None,
                        },
                    }),
                ],
                Children: [
                    {
                        // left arm
                        Translation: [0, -0.5, 0],
                        Scale: [1, 2, 1],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, shirt_color),
                        ],
                    },
                    {
                        // left hand
                        Translation: [0, -2, 0],
                        Scale: [0.9, 1, 0.9],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, skin_color),
                        ],
                    },
                ],
            },
            {
                // right shoulder
                Translation: [-1.5, 0, 0],
                Using: [
                    animate({
                        idle: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], -5, 0, 0),
                                },
                                {
                                    Timestamp: 0.5,
                                    Rotation: from_euler([0, 0, 0, 1], 5, 0, 0),
                                },
                            ],
                        },
                        walk: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], -60, 0, 0),
                                },
                                {
                                    Timestamp: 0.2,
                                    Rotation: from_euler([0, 0, 0, 1], 30, 0, 0),
                                },
                            ],
                        },
                        jump: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Translation: [-1.5, 0, 0],
                                    Rotation: [0, 0, 0, 1],
                                },
                                {
                                    Timestamp: 0.2,
                                    Translation: [-1.5, 2, 0],
                                    Rotation: from_euler([0, 0, 0, 1], 0, 0, -135),
                                    Ease: ease_in_out_quart,
                                },
                                {
                                    Timestamp: 0.4,
                                    Translation: [-1.5, 0, 0],
                                    Rotation: [0, 0, 0, 1],
                                    Ease: ease_out_quart,
                                },
                            ],
                            Flags: AnimationFlag.None,
                        },
                    }),
                ],
                Children: [
                    {
                        // right arm
                        Translation: [0, -0.5, 0],
                        Scale: [1, 2, 1],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, shirt_color),
                        ],
                    },
                    {
                        // right hand
                        Translation: [0, -2, 0],
                        Scale: [0.9, 1, 0.9],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, skin_color),
                        ],
                    },
                ],
            },
            {
                // left hip
                Translation: [0.5, -2, 0],
                Using: [
                    animate({
                        idle: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], 5, 0, 0),
                                },
                                {
                                    Timestamp: 1,
                                    Rotation: from_euler([0, 0, 0, 1], 5, 0, 0),
                                },
                            ],
                        },
                        walk: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], -45, 0, 0),
                                },
                                {
                                    Timestamp: 0.2,
                                    Rotation: from_euler([0, 0, 0, 1], 45, 0, 0),
                                },
                            ],
                        },
                        jump: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Translation: [0.5, -2, 0],
                                    Rotation: [0, 0, 0, 1],
                                },
                                {
                                    Timestamp: 0.2,
                                    Translation: [0.5, 0, 0],
                                    Rotation: from_euler([0, 0, 0, 1], 0, 0, 45),
                                    Ease: ease_in_out_quart,
                                },
                                {
                                    Timestamp: 0.4,
                                    Translation: [0.5, -2, 0],
                                    Rotation: [0, 0, 0, 1],
                                    Ease: ease_out_quart,
                                },
                            ],
                            Flags: AnimationFlag.None,
                        },
                    }),
                ],
                Children: [
                    {
                        // left leg
                        Translation: [0, -1.5, 0],
                        Scale: [1, 2, 1],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, pants_color),
                        ],
                    },
                ],
            },
            {
                // right hip
                Translation: [-0.5, -2, 0],
                Using: [
                    animate({
                        idle: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], -5, 0, 0),
                                },
                                {
                                    Timestamp: 1,
                                    Rotation: from_euler([0, 0, 0, 1], -5, 0, 0),
                                },
                            ],
                        },
                        walk: {
                            Keyframes: [
                                {
                                    Timestamp: 0,
                                    Rotation: from_euler([0, 0, 0, 1], 45, 0, 0),
                                },
                                {
                                    Timestamp: 0.2,
                                    Rotation: from_euler([0, 0, 0, 1], -45, 0, 0),
                                },
                            ],
                        },
                        jump: {
                            Keyframes: [
                                {
                                    Timestamp: 0.0,
                                    Translation: [-0.5, -2, 0],
                                    Rotation: [0, 0, 0, 1],
                                },
                                {
                                    Timestamp: 0.2,
                                    Translation: [-0.5, 0, 0],
                                    Rotation: from_euler([0, 0, 0, 1], 0, 0, -45),
                                    Ease: ease_in_out_quart,
                                },
                                {
                                    Timestamp: 0.4,
                                    Translation: [-0.5, -2, 0],
                                    Rotation: [0, 0, 0, 1],
                                    Ease: ease_out_quart,
                                },
                            ],
                            Flags: AnimationFlag.None,
                        },
                    }),
                ],
                Children: [
                    {
                        // right leg
                        Translation: [0, -1.5, 0],
                        Scale: [1, 2, 1],
                        Using: [
                            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshCube, pants_color),
                        ],
                    },
                ],
            },
        ],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1X2NoYXJhY3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsdV9jaGFyYWN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXpFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUlwRSxJQUFJLFlBQVksR0FBZ0I7SUFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDZixDQUFDO0FBQ0YsSUFBSSxXQUFXLEdBQWdCO0lBQzNCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ25CLENBQUM7QUFDRixJQUFJLFdBQVcsR0FBZ0I7SUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FB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