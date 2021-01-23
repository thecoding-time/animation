import { camera_display_perspective } from "../components/com_camera.js";
export function blueprint_camera(game) {
    return {
        Rotation: [0, 1, 0, 0],
        Children: [
            {
                Rotation: [0, 1, 0, 0],
                Using: [camera_display_perspective(1, 0.1, 1000)],
            },
        ],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1X2NhbWVyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsdV9jYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFJdkUsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVU7SUFDdkMsT0FBTztRQUNILFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixRQUFRLEVBQUU7WUFDTjtnQkFDSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEQ7U0FDSjtLQUNKLENBQUM7QUFDTixDQUFDIn0=