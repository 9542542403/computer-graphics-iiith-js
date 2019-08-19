# Experiment Project Documentation
---
## Introduction
This document captures the test cases of the experiment.

## Functional Test Cases
| Test case Id | Test Scenario | Test Case | Test Steps | Test Data | Expected Output | Actual Output | Test Result | Comments |
| ---  |---    |---            |---   | ---      |  ---           |---   | ---      |  ---           |
| 1. | Checked any of the draw checkbox ( Yes ) | Entered the valid input ( Yes ) | 1. Open World Tab 2. Check the checkbox to YES in Draw feature | Checked the Draw checkbox | The respective figure will be added in the screen | The respective figure is be displayed on the screen | Pass | None |
| 2. | Checked any of the draw checkbox ( No ) | Entered the valid input ( No ) | 1. Open World Tab 2. Check the checkbox to NO in Draw feature | Checked the Draw checkbox |  The respective figure will be deleted from the screen | The respective figure was removed from the screen | Pass | The figure must be present in the screen before deleting / removing it. |
| 3. | Checked any of the Active checkbox ( Yes ) | Entered the valid input ( Yes ) | 1. Open World Tab 2. Check the checkbox to YES in Draw feature 3. Check the checkbox to YES in Active feature | Checked the Draw and Active checkbox | The respective figure will be added in the screen and its vertices will be highlighted | The respective figure was added on the screen and its vertices will were highlighted.  | Pass | The figure must be present in the screen before making it active. |
| 4. | Checked any of the Active checkbox ( No ) | Entered the valid input ( No ) | 1. Open World Tab 2. Check the checkbox to YES in Draw feature 3. Check the checkbox to No in Active feature | Checked the Draw and Active checkbox | The respective figure will be added in the screen and its vertices will be not be highlighted anymore. | The respective figure was added on the screen and its vertices will were removed from highlighting. | Pass | The figure must be present in the screen before making it inactive. |
| 5. | New coordinates of the new added figure | Entered the valid input | 1. Open World Tab 2. Check the checkbox to YES in Draw feature 3. Enter a x, y and z coordinate (7, 5, -2)| x = 7, y = 5, z = -2 | The respective figure will be added in the screen and shifted to the entered point (7, 5 , -2). | The respective figure is be displayed on the screen and shifted to the point (7, 5, -2) | Pass | This can be applied on any figure of the structure but the figure must be present in the screen. Use the mouse and arrow keys for observing the shifted figure. |
| 6. | Checked the Lock Vertices checkbox to NO | Entered the valid input ( No ) | 1. Open Display Tab 2. Check the checkbox to NO in Lock Vertices checkbox | Checked the Lock vertices checkbox to NO | The vertices of the structure will no more be highlighted | The vertices of the structure are no more highlighted | Pass | None |
| 7. | Checked the Draw XY grid in the screen checkbox to NO | Entered the valid input ( No ) | 1. Open Display Tab 2. Check the checkbox to NO in Draw XY grid in the screen checkbox | Checked the Draw XY grid in the screen checkbox to NO | The XY grid will be removed from the screen | The XY grid was removed from the screen. | Pass | None |
| 8. | Checked the Draw YZ grid in the screen checkbox to YES | Entered the valid input ( Yes ) | 1. Open Display Tab 2. Check the checkbox to NO in Draw YZ grid in the screen checkbox | Checked the Draw YZ grid in the screen checkbox to YES | The YZ grid will be added in the screen | The YZ grid was added in the screen. | Pass | None |
| 9. | Checked the Draw ZX grid in the screen checkbox to YES | Entered the valid input ( Yes ) | 1. Open Display Tab 2. Check the checkbox to NO in Draw ZX grid in the screen checkbox | Checked the Draw ZX grid in the screen checkbox to YES | The ZX grid will be added in the screen | The ZX grid was added in the screen. | Pass | None |
| 10. | Checked the Show the simulation in 3D checkbox to NO | Entered the valid input ( No ) | 1. Open Display Tab 2. Check the checkbox to NO in Show the simulation in 3D checkbox | Checked the Show the simulation in 3D checkbox to NO | The structure will be shown in 2D | The structure was shown in 2D | Pass | None |
| 11. | Checked the Show Animation structure checkbox to NO | Entered the valid input ( No ) | 1. Open Display Tab 2. Check the checkbox to NO in Show Animation structure checkbox | Checked the Show Animation structure checkbox to NO | The animation from the scene will be removed | The animation from the scene was removed | Pass | None |
| 12. | Move the entire figure | Entered the valid input | 1. Open Display Tab 2. Enter a x, y and z units of transition | x = 5, y = 2, z = -3 | The structure will be moved in the screen and translated at a distance (5, 2 , -3) from the current point. | The structure was moved in the screen and translated at a distance (5, 2 , -3) from the current point. | Pass | This is applied on the entire structure. Use the mouse and arrow keys for observing the shifted figure. |

## Cross Browser Testing
| S.no | Browser | Version | Works ( Yes / No ) |
| ---  |---    |---            |---   |
| 1. | Chrome | 75 | Yes |
| 2. | Chrome | 74 | Yes |
| 3. | Chrome | 73 | Yes |
| 4. | Firefox | 67 | Yes |
| 5. | Firefox | 66 | Yes |
| 6. | Safari | 12.1 | Yes |
| 7. | Edge | 17 | Yes |
| 8. | Edge | 18 | Yes |
