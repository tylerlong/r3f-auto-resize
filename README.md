# R3F auto resize demo

No matter how you resize the window, the canvas will always be the same size as the window.

And the height of the 3d world will always be 5. This is because we want to create a 5 rows world, like the plant vs zombie game.

The 3d world will always take the full canvas, both in width and height.

Which means, we need to set the camera zoom value peoperly. We calculate the zoom by the canvas height, the world height(5), and the orientation of the camera.

After we have the zoom value, wen can calalate the world width by the canvas width and the zoom value.

Final result is: we have the zoom value, the world width, and the world height. We can use them to create a perfect 3d world that always fit the canvas.
