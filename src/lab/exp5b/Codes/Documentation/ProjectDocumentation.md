# Experiment Project Documentation
---
## Introduction
This  document captures the technical details related to the experiment development.

## Project
**Domain Name :** Computer Science & Engineering

**Lab Name :** Computer Graphics

**Experiment Name :** Hierachical Transformations: 3D Articulated Arm

Here in this experiment we put the concepts of multiple transformations learnt in experiment 5a to practice with an Articulated arm experiment.

A hierarchy is an organization of things into levels. In a very general sense, he things higher up in a hierachy have control over the lower things. Here this applies to the matrix transformations.

We constructed a hierarchical articulated arm model where each node/part follows a series of transformations from the root node to its current position. The top-most object in this hierarchy is the Shoulder followed by Elbow, Forearm, Wrist and Palm. Moving the shoulder moves the rest of the parts as all others derive their transformation from the shoulder. When you move the wrist only the palm moves while the shoulder, elbow and forearm remain unchanged. This is because the wrist is lower in hierarchy than your elbow and therefore has no control on it.

## Purpose of the project
Objective of this experiment is to understand the effective tranformation due to a series of transformations and how to construct a hierarchical model.

## Project Developers Details
| S.no | Names | Year of Study | Role | Email-ID | github handles |
| ---  |---    |---            |---   | ---      |  ---           |
| 1    | Koppula Bhanu Prakash Reddy | 2018-22 | BT18ECE006 | kbpreddy2001@gmail.com | Bhanuprakash1105 |

## Technologies and Libraries
**Technologies :**
  1. HTML
  2. CSS
  3. Javascript

**Libraries :**
  1. ThreeJs

## Development Environment
**OS :** Windows-10 64-Bit and Ubuntu 18.04 64-Bit

## Documents
| S.no | Link to Document | Role |
| ---  |---    |---            |
| 1. | Procedure | This document captures the instructions to run the simulations |
| 2. | Test Cases | This document captures the functional test cases of the experiment simulation |
| 3. | Code Documentation | This document captures the  details related to code |

## Process Followed to convert the experiment
1. Understand the assigned experiment Java simulation
2. Understanding the experiment concept
3. Re-implement the same in javascript

## Value Added by our Project
1. It would be beneficial for engineering students who develop graphics in web pages using ThreeJs library.

## Risks and Challenges
1. Creating the web page screen responsive and proper styling for various dimension screens.
2. Creating the transition features.
3. Drawing the grid on the screen.
4. Adding draw and active features.
