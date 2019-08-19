# Experiment Project Documentation
---
## Introduction
This document captures the test cases of the experiment.

## Functional Test Cases
| Test case Id | Test Scenario | Test Case | Test Steps | Test Data | Expected Output | Actual Output | Test Result | Comments |
| ---  |---    |---            |---   | ---      |  ---           |---   | ---      |  ---           |
| 1. | frame width > 25, frame height > 25 | Enter invalid entries | 1. Enter the frame width and height, 2. Click on enter button | frame width = 48, frame height = 70 | Alert Message | Alert Message | Pass | None |
| 2. | frame width <= 0, frame height <= 0 | Enter invalid entries | 1. Enter the frame width and height, 2. Click on enter button | frame width = -10, frame height = 0 | Alert Message | Alert Message | Pass | None |
| 3. | frame width != Integer, frame height != Integer | Enter invalid entries | 1. Enter the frame width and height, 2. Click on enter button | frame width = 22.5, frame height = 15.68 | Alert Message | Alert Message | Pass | None |
| 4. | 1st end point coordinates or 2nd end points coordinates > frame width or frame height | Enter invalid entries | 1. Enter the frame width and height, 2. Click on enter button, 3. Enter the 1st and 2nd end points, 4. Click on Start | frame width = 10, frame height = 15, 1st end point (9, 9), 2nd end point (20, 14) | Alert Message | Alert Message | Pass | None |
| 5. | 1st end point coordinates or 2nd end points coordinates are decimal values | Enter invalid entries | 1. Enter the frame width and height, 2. Click on enter button, 3. Enter the 1st and 2nd end points, 4. Click on Start | frame width = 10, frame height = 10, 1st end point (4.5, 2), 2nd end point (9.78, 5.05) | Alert Message | Alert Message | Pass | None |
| 6. | Slope of line is Infinity | Enter valid entries | 1. Enter the frame width and height, 2. Click on enter button, 3. Enter the 1st and 2nd end points, 4. Click on Start, 5. Click on Next iteration until the line is Rasterized | frame width = 10, frame height = 10, 1st end point (0, 0), 2nd end point (0, 5) | Vertical Rasterized line | Vertical Rasterized line | Pass | None |
| 7. | Slope of line is zero | Enter valid entries | 1. Enter the frame width and height, 2. Click on enter button, 3. Enter the 1st and 2nd end points, 4. Click on Start, 5. Click on Next iteration until the line is Rasterized | frame width = 15, frame height = 15, 1st end point (1, 2), 2nd end point (5, 2) | Horizontal Rasterized line | Horizontal Rasterized line | Pass | None |
| 8. | Slope of line is negative | Enter valid entries | 1. Enter the frame width and height, 2. Click on enter button, 3. Enter the 1st and 2nd end points, 4. Click on Start, 5. Click on Next iteration until the line is Rasterized | frame width = 25, frame height = 25, 1st end point (1, 12), 2nd end point (15, 4) | Rasterized line | Rasterized line | Pass | None |

## Cross Browser Testing
| S.no | Browser | Version | Works ( Yes / No ) |
| ---  |---    |---            |---   |
| 1. | Chrome | 75 | Yes |
| 2. | Chrome | 74 | Yes |
| 3. | Chrome | 73 | Yes |
| 4. | FireFox | 67 | Yes |
| 5. | FireFox | 66 | Yes |
| 6. | Safari | 12.1 | Yes |
| 7. | Edge | 17 | Yes |
| 8. | Edge | 18 | Yes |
