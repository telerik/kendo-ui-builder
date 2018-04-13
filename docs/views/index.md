---
title: Overview
page_title: Overview - Views - Kendo UI Builder
description: "Learn how to use the views which are provided by the Kendo UI Builder tool when creating and managing Angular and AngularJS-based web applications."
slug: viewsoverview_kuib
position: 0
---

# Views Overview

## System Views

System views are ...

## Predefined Views

Predefined views are ... Data-driven&mdash;Composed of predefined templates that the Designer populates with your data sources.

## Custom Views

Custom views are... Also known as Blank views. The modules you create can contain one or more views that you can customize.

<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Categorical</h2>
    <p>Categorical charts provide built-in support for displaying dates. The categories represent unique values which are not mathematically related to each other.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
        <li class="col-xs-4 col-md-3">
            <a href="{% slug area_seriestypes_charts %}">
                <svg id="area" viewBox="0 0 70 70">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffab09" />
                            <stop offset="70%" stop-color="#ff6358" />
                            <stop offset="100%" stop-color="#dd3169" />
                        </linearGradient>
                    </defs>
                    <path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z" />
                </svg>
                <p>Area</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug barcolumn_seriestypes_charts %}">
                <svg id="bar" viewBox="0 0 70 70">
                    <path d="M12,60H9V29h3ZM24,36H21V60h3ZM36,20H33V60h3ZM48,33H45V60h3ZM60,21H57V60h3ZM6,36H3V60H6Zm12-3H15V60h3Zm12-4H27V60h3Zm12-3H39V60h3Zm12,2H51V60h3ZM66,15H63V60h3Z" />
                </svg>
                <p>Bar</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug boxplot_seriestypes_charts %}">
                <svg id="boxplot" viewBox="0 0 70 70">
                    <path class="cls-1" d="M26,28H24V11h2Zm2,1H22v8h6Zm-2,9H24V49h2ZM36,20H34v5h2Zm2,6H32V39h6ZM36,40H34V55h2ZM6,21H4v9H6ZM8,31H2V46H8ZM6,47H4v6H6ZM16,17H14v9h2Zm2,10H12V41h6ZM16,42H14V58h2ZM66,11H64V27h2Zm2,17H62V39h6ZM66,40H64v6h2ZM46,14H44V29h2Zm2,16H42V43h6ZM46,44H44v4h2ZM56,18H54v7h2Zm2,8H52V49h6ZM56,50H54V60h2Z" />
                </svg>
                <p>Box Plot</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug bullet_seriestypes_charts %}">
                <svg id="bullet" viewBox="0 0 70 70">
                    <path d="M51,42v2H33V42ZM3,40v6H32V40Zm52,2v2H67V42Zm-3-4V48h2V38ZM26,56v2H40V56ZM3,54v6H25V54Zm41,2v2H67V56Zm-3-4V62h2V52Zm0-24v2h4V28ZM3,26v6H40V26Zm46,2v2H67V28Zm-3-4V34h2V24ZM28,14v2H57V14ZM3,12v6H27V12Zm58,2v2h6V14Zm-3-4V20h2V10Z" />
                </svg>
                <p>Bullet</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug line_seriestypes_charts %}">
                <svg id="line" viewBox="0 0 70 70">
                    <path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Zm0,27a4,4,0,0,0-2.68,1.05l-5.4-2.31a4,4,0,1,0-7.69.55l-6,3.41A4,4,0,0,0,37,48a4,4,0,0,0,.22,1.25l-5.88,2.52a4,4,0,0,0-5.63,1l-6.1-3A4,4,0,0,0,20,48a4,4,0,0,0-8,0,4,4,0,0,0,.24,1.31L6.17,53.65A4,4,0,1,0,8,57a4,4,0,0,0-.48-1.86L13.35,51a3.94,3.94,0,0,0,4.94.29L25,54.64c0,.12,0,.24,0,.36a4,4,0,1,0,7.65-1.62l5.67-2.43A4,4,0,0,0,45,48a3.91,3.91,0,0,0,0-.4L51.33,44a3.94,3.94,0,0,0,5.73-.42l5.16,2.21A4,4,0,0,0,62,47a4,4,0,1,0,4-4ZM4,59a2,2,0,1,1,2-2A2,2,0,0,1,4,59Zm12-9a2,2,0,1,1,2-2A2,2,0,0,1,16,50Zm13,7a2,2,0,1,1,2-2A2,2,0,0,1,29,57Zm12-7a2,2,0,1,1,2-2A2,2,0,0,1,41,50Zm13-7a2,2,0,1,1,2-2A2,2,0,0,1,54,43Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,66,49Z" />
                </svg>
                <p>Line</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug radar_seriestypes_charts %}">
                <svg id="radar" viewBox="0 0 70 70">
                    <path d="M35,2.67,7,18.83V51.17L35,67.33,63,51.17V18.83Zm1,2.89L60,19.41,52,24,36,14.79Zm1.9,32.27L40,39l-2.42,1.4ZM39,36.13l2-1.83v3Zm-1.69,6.79L42,40.2l8,4.62L36,52.87ZM43,38.46v-6l3-2.71,5-2.88V43.08ZM36,17.1l14,8.08-1.92,1.11-11.36.46L36,26.34ZM19,30l7.68,8.6L19,43.08Zm8.53,10.42,3.91,10.95L20,44.82Zm-5.77-16.3L34,17.1v9.24l-.36.21ZM34,5.56v9.24L18.79,23.58l-2.41-.48L10,19.41ZM9,21.14l4.22,2.44L17,27.81V44.24L9,48.86Zm1,29.44L18,46l14.48,8.36L34,58.59v5.85ZM36,64.44V55.21L52,46l8,4.62ZM61,48.86l-8-4.62V25.76l8-4.62Z" />
                </svg>
                <p>Radar</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug rangearea_seriestypes_charts %}">
                <svg id="area" viewBox="0 0 70 70">
                    <path d="M3,58h64v2H3V58z M54,30l-13-8L29,36l-13-7L3,40.4v10L16,45l13,4l12-9l13,1l13-7.5V18.6L54,30z" />
                </svg>
                <p>RangeArea</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug rangebar_seriestypes_charts %}">
                <svg id="rangebar" viewBox="0 0 70 70">
                    <path d="M12,60H9V29h3ZM24,36H21V53h3Zm12-2H33V60h3Zm12-7H45V54h3Zm12-6H57V46h3ZM6,36H3V54H6Zm12-3H15V48h3Zm12-4H27V46h3ZM42,16H39V50h3Zm12,4H51V56h3Zm12-5H63V50h3Z" />
                </svg>
                <p>RangeBar</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug waterfall_seriestypes_charts %}">
                <svg id="waterfall" viewBox="0 0 70 70">
                    <path d="M28,35H22V27h6ZM38,24H32V35h6ZM8,45H2V60H8ZM18,27H12V41h6Zm50-6H62v9h6ZM48,11H42v9h6Zm10,0H52V30h6ZM18,42H2v2H18ZM28,24H12v2H28ZM38,36H22v2H38ZM48,21H32v2H48ZM58,8H42v2H58ZM68,31H52v2H68Z" />
                </svg>
                <p>Waterfall</p>
            </a>
        </li>
    </ul>
</div>
</div>
