import { set_seed } from "../../common/random.js";
import { blueprint_camera } from "../blueprints/blu_camera.js";
import { blueprint_character } from "../blueprints/blu_character.js";
import { animate, AnimationFlag } from "../components/com_animate.js";
import { audio_listener } from "../components/com_audio_listener.js";
import { audio_source } from "../components/com_audio_source.js";
import { control } from "../components/com_control.js";
import { light_directional } from "../components/com_light.js";
import { instantiate } from "../entity.js";
import { World } from "../world.js";
export function scene_stage(game) {
    game.World = new World();
    game.ViewportResized = true;
    set_seed(Date.now());
    // Camera.
    instantiate(game, {
        Translation: [0, 1, 15],
        Using: [audio_listener()],
        ...blueprint_camera(game),
    });
    // Light 1.
    instantiate(game, {
        Translation: [2, 3, 5],
        Using: [light_directional([1, 1, 1], 1)],
    });
    // Light 2.
    instantiate(game, {
        Translation: [-5, -5, -5],
        Using: [light_directional([1, 1, 1], 1)],
    });
    // Character.
    instantiate(game, {
        Translation: [0, 1, 0],
        Using: [
            animate({
                idle: {
                    Keyframes: [
                        {
                            Timestamp: 0,
                            Rotation: [0, 0, 0, 1],
                        },
                        {
                            Timestamp: 3,
                            Rotation: [0, 1, 0, 0],
                        },
                        {
                            Timestamp: 6,
                            Rotation: [0, 0, 0, -1],
                        },
                    ],
                    Flags: AnimationFlag.Loop,
                },
            }),
        ],
        Children: [
            {
                Translation: [-7, 0, 0],
                ...blueprint_character(game),
                Using: [control(), audio_source(true)],
            },
        ],
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlX3N0YWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NlX3N0YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFekMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUVsQyxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVU7SUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRTVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVyQixVQUFVO0lBQ1YsV0FBVyxDQUFDLElBQUksRUFBRTtRQUNkLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0tBQzVCLENBQUMsQ0FBQztJQUVILFdBQVc7SUFDWCxXQUFXLENBQUMsSUFBSSxFQUFFO1FBQ2QsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzNDLENBQUMsQ0FBQztJQUVILFdBQVc7SUFDWCxXQUFXLENBQUMsSUFBSSxFQUFFO1FBQ2QsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzNDLENBQUMsQ0FBQztJQUVILGFBQWE7SUFDYixXQUFXLENBQUMsSUFBSSxFQUFFO1FBQ2QsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsS0FBSyxFQUFFO1lBQ0gsT0FBTyxDQUFDO2dCQUNKLElBQUksRUFBRTtvQkFDRixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksU0FBUyxFQUFFLENBQUM7NEJBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUN6Qjt3QkFDRDs0QkFDSSxTQUFTLEVBQUUsQ0FBQzs0QkFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ3pCO3dCQUNEOzRCQUNJLFNBQVMsRUFBRSxDQUFDOzRCQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUMxQjtxQkFDSjtvQkFDRCxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUk7aUJBQzVCO2FBQ0osQ0FBQztTQUNMO1FBQ0QsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkIsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztTQUNKO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyJ9