import { Game } from "./game.js";
import { loop_start } from "./loop.js";
import { scene_stage } from "./scenes/sce_stage.js";
let game = new Game();
scene_stage(game);
loop_start(game);
// @ts-ignore
window.game = game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRWxELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqQixhQUFhO0FBQ2IsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMifQ==