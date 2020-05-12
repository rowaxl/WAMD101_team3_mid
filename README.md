# WAMD101 MAY MID
## Team3
## Member: Koro, Chizuru, Wonjae

## Overview
### 1 HTML for show every sections
### 7 Sections for each requirements
### 7 Javascript file for each sections
### Menu bar on top for scroll to each sections

## Information
### Design Library: Bootstrap Material Design
  - layout
    - breakpoint: 991px
    - container: \<div class="container"\>
      - wrap whole items
      - max-width will be changed
    - header: \<nav\>
      - if width < 991, menu buttons dissapear and menu button will show
      - when click menu item, scroll to sections
    - grid-row: \<div class="row"\>
      - a row for each section
      - use full width with single column
    - cards: \<div class="card"\>
      - white rectangle with shadow
      - body: \<div class="card-body"\>
        - card title: \<h5 class="card-title"\>Section 1
        - subtitle: \<h6 class="card-subtitle text-muted"\>discribe section
        - form: \<div class="form-group"\>
          - from label: \<label for="name_box"\>Name\</label\>
          - input: \<input id="name_box" type="text" class="form-control" placeholder="Enter Your Name!"\>
  - color
    - using default light-theme colors
    - used by class(e.g.)
      - \<p class="text-danger"\>Caution!\</p\>
      - \<button class="btn-success"\>Send\</button\>
    - themes:
      - success: #4caf50 (for send, post...)
      - gray: #6c757d (for dismiss, close...)
      - danger: #f44336 (for delete...)
