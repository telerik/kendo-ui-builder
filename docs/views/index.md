---
title: Overview
page_title: Overview - Views - Kendo UI Builder
description: "Learn how to use the views which are provided by the Kendo UI Builder tool when creating and managing Angular and AngularJS-based web applications."
slug: viewsoverview_kuib
position: 0
---

# Views Overview

The views are the functional screens of the modules and, practically, each view provides the settings for a single application page.

<div class="container-fluid">
<div class="row separator-bottom">
<div class="col-md-4 card-list-info">
    <h2>System</h2>
    <p>The system views are built in the Application Module.</p> <p>Even though the system views cannot be created or deleted, some of their properties allow you to modify them. For example, in the App Layout system view, you can reorder and edit the layout of the generated application.</p>
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
    <h2>Built-In</h2>
    <p>The built-in views offer a predefined layout and a set of predefined functionalities.</p> <p>Even though the layout of the built-in views cannot be edited, some of their properties allow you to modify them. For example, the Data Grid Form view will always render the Grid to the left and its form field to the right, but you can modify the data to which you bind the view, configure the columns it displays, or group its fields.</p>
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
    <h2>User-Defined</h2>
    <p>In the Builder, the user-defined view is the Blank view.</p> <p>The Blank view enables you to meet more complex project requirements and is based on the Bootstrap fluid grid system. This means that by dragging and dropping rows and columns you can customize its layout and also add, edit, and delete built-in and custom components.</p>
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

## Suggested Links

* [Custom Views]({% slug extendingviews_kuib %})
