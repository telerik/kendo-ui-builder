---
title: Overview
page_title: Overview - Views - Kendo UI Builder
description: "Learn how to use the views which are provided by the Kendo UI Builder tool when creating and managing Angular and AngularJS-based web applications."
slug: viewsoverview_kuib
position: 0
---

# Views Overview

The Views represent the screens for the functions which build up each module.

<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>System Views</h2>
    <p>The system views are built in the App Module. They cannot be deleted and you cannot create new system views. Some of the system view properties can be modified. For example, in the App Layout view you can reorder and modify the layout of the generated application.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
    <li class="col-xs-4 col-md-3">
        <a href="{% slug applayout_kuib %}">
           <svg id="area" viewBox="0 0 70 70">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffab09" />
                        <stop offset="70%" stop-color="#ff6358" />
                        <stop offset="100%" stop-color="#dd3169" />
                    </linearGradient>
                </defs>
                <path d="..." />
            </svg>
            <p>App Layout</p>
        </a>
    </li>
        <li class="col-xs-4 col-md-3">
            <a href="{% slug landingpage_kuib %}">
               <svg id="area" viewBox="0 0 70 70">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffab09" />
                            <stop offset="70%" stop-color="#ff6358" />
                            <stop offset="100%" stop-color="#dd3169" />
                        </linearGradient>
                    </defs>
                    <path d="..." />
                </svg>
                <p>Landing Page</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug login_kuib %}">
                <svg id="bar" viewBox="0 0 70 70">
                    <path d="..." />
                </svg>
                <p>Login</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug unauthorized_kuib %}">
                <svg id="boxplot" viewBox="0 0 70 70">
                    <path class="cls-1" d="..." />
                </svg>
                <p>Unauthorized</p>
            </a>
          </li>
        </ul>
</div>
</div>
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Predefined</h2>
    <p>The predefined views offer a predefined layout and set of functionalities. The layout cannot be changed but some of the view properties can be modified. For example, you can update the data to which you will bind the Data Grid Form view, configure the columns it will display, or group its fields, but the view will always deliver the Grid to the left and the form field to the right.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
    <li class="col-xs-4 col-md-3">
        <a href="{% slug datagrid_kuib %}">
            <svg id="pie" viewBox="0 0 70 70">
                <path d="..." />
            </svg>
            <p>Data Grid</p>
        </a>
    </li><li class="col-xs-4 col-md-3">
            <a href="{% slug datagridform_kuib %}">
                <svg id="donut" viewBox="0 0 70 70">
                    <path d="..." />
                </svg>
                <p>Data Grid Form</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug datagridseparateform_kuib %}">
                <svg id="pie" viewBox="0 0 70 70">
                    <path d="..." />
                </svg>
                <p>Data Grid Separate Form</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug hierarchicaldatagrid_kuib %}">
                <svg id="pie" viewBox="0 0 70 70">
                    <path d="..." />
                </svg>
                <p>Hierarchical Data Grid</p>
            </a>
        </li><li class="col-xs-4 col-md-3">
            <a href="{% slug stackeddatagrids_kuib %}">
                <svg id="pie" viewBox="0 0 70 70">
                    <path d="..." />
                </svg>
                <p>Stacked Data Grids</p>
            </a>
        </li>
    </ul>
</div>
</div>
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>Blank</h2>
    <p>The Blank view is based on the Bootstrap fluid grid system&mdash;you can customize the layout of the Blank view by dragging and dropping rows and columns. The Blank view provides support for implementing predefined and custom-tailored components by dragging and dropping them within the view.</p>
</div>
<div class="col-md-8">
    <ul class="card-list row">
    <li class="col-xs-4 col-md-3">
        <a href="{% slug customviews_kuib %}">
            <svg id="pie" viewBox="0 0 70 70">
                <path d="..." />
            </svg>
            <p>Blank</p>
          </a>
        </li>
      </ul>
    </div>
</div>
