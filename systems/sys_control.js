import { query_all } from "../components/com_transform.js";
import { snd_jump } from "../sounds/snd_jump.js";
import { snd_walk } from "../sounds/snd_walk.js";
const QUERY = 16 /* Control */ | 4 /* AudioSource */;
export function sys_control(game, delta) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}
function update(game, entity) {
    let audio = game.World.AudioSource[entity];
    let anim;
    if (game.InputState["Space"]) {
        anim = "jump";
        audio.Trigger = snd_jump;
    }
    else if (game.InputState["ArrowUp"]) {
        anim = "walk";
        audio.Trigger = snd_walk;
    }
    else {
        anim = "idle";
    }
    for (let descendant of query_all(game.World, entity, 1 /* Animate */)) {
        game.World.Animate[descendant].Trigger = anim;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzX2NvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzeXNfY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFekQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUcvQyxNQUFNLEtBQUssR0FBRyxzQ0FBNkIsQ0FBQztBQUU1QyxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVUsRUFBRSxLQUFhO0lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM3QyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25CO0tBQ0o7QUFDTCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsSUFBVSxFQUFFLE1BQWM7SUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSSxJQUF3QixDQUFDO0lBRTdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMxQixJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7S0FDNUI7U0FBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbkMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0tBQzVCO1NBQU07UUFDSCxJQUFJLEdBQUcsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsS0FBSyxJQUFJLFVBQVUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLGtCQUFjLEVBQUU7UUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNqRDtBQUNMLENBQUMifQ==