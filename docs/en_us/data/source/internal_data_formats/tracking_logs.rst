.. _Tracking Logs:

######################
Tracking Logs
######################

This chapter provides reference information about the event data that is
delivered in data packages. Events are emitted by the server or the browser to
capture information about interactions with the courseware and the Instructor
Dashboard in the LMS, and are stored in JSON documents. In the data package,
event data is delivered in a log file.

The sections in this chapter describe:

* A :ref:`sample_events`.
* :ref:`common` that are included in the JSON document of every Event.
* :ref:`Student_Event_Types` for interactions with the LMS outside of the
  Instructor Dashboard. 
* :ref:`Instructor_Event_Types` for interactions with the Instructor Dashboard
  in the LMS.

Student and instructor events are grouped into categories in this chapter. For
an alphabetical list of events, see the :ref:`event_list`.


.. _sample_events:

*************************
Sample Event
*************************

A sample event from an edX.log file follows. The JSON documents that include
event data are delivered in a compact, machine-readable format that can be
difficult to read at a glance.

.. code-block:: json

    {"agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) 
    Chrome/30.0.1599.101 Safari/537.36", "context": {"course_id": "edx/AN101/2014_T1", 
    "module": {"display_name": "Multiple Choice Questions"}, "org_id": "edx", "user_id": 
    9999999}, "event": {"answers": {"i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": 
    "yellow", "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_4_1": ["choice_0", "choice_2"]}, 
    "attempts": 1, "correct_map": {"i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": 
    {"correctness": "incorrect", "hint": "", "hintmode": null, "msg": "", "npoints": null, 
    "queuestate": null}, "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_4_1": 
    {"correctness": "correct", "hint": "", "hintmode": null, "msg": "", "npoints": null, 
    "queuestate": null}}, "grade": 2, "max_grade": 3, "problem_id": "i4x://edx/AN101/problem/
    a0effb954cca4759994f1ac9e9434bf4", "state": {"correct_map": {}, "done": null, "input_state": 
    {"i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": {}, "i4x-edx-AN101-problem-
    a0effb954cca4759994f1ac9e9434bf4_4_1": {}}, "seed": 1, "student_answers": {}}, "submission": 
    {"i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": {"answer": "yellow", "correct": 
    false, "input_type": "optioninput", "question": "What color is the open ocean on a sunny day?", 
    "response_type": "optionresponse", "variant": ""}, "i4x-edx-AN101-problem-
    a0effb954cca4759994f1ac9e9434bf4_4_1": {"answer": ["a piano", "a guitar"], "correct": true, 
    "input_type": "checkboxgroup", "question": "Which of the following are musical instruments?", 
    "response_type": "choiceresponse", "variant": ""}}, "success": "incorrect"}, "event_source": 
    "server", "event_type": "problem_check", "host": "precise64", "ip": "NN.N.N.N", "page": "x_module", 
    "time": 2014-03-03T16:19:05.584523+00:00", "username": "AAAAAAAAAA"}

If you use a JSON formatter to "pretty print" this event, a version that is more readable is produced.

.. code-block:: json

 {
    "agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36", 
    "context": {
        "course_id": "edx/AN101/2014_T1", 
        "module": {
            "display_name": "Multiple Choice Questions"
        }, 
        "org_id": "edx", 
        "user_id": 9999999
    }, 
    "event": {
        "answers": {
            "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": "yellow", 
            "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_4_1": [
                "choice_0", 
                "choice_2"
            ]
        }, 
        "attempts": 1, 
        "correct_map": {
            "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": {
                "correctness": "incorrect", 
                "hint": "", 
                "hintmode": null, 
                "msg": "", 
                "npoints": null, 
                "queuestate": null
            }, 
            "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_4_1": {
                "correctness": "correct", 
                "hint": "", 
                "hintmode": null, 
                "msg": "", 
                "npoints": null, 
                "queuestate": null
            }
        }, 
        "grade": 2, 
        "max_grade": 3, 
        "problem_id": "i4x://edx/AN101/problem/a0effb954cca4759994f1ac9e9434bf4", 
        "state": {
            "correct_map": {}, 
            "done": null, 
            "input_state": {
                "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": {}, 
                "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_4_1": {}
            }, 
            "seed": 1, 
            "student_answers": {}
        }, 
        "submission": {
            "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_2_1": {
                "answer": "yellow", 
                "correct": false, 
                "input_type": "optioninput", 
                "question": "What color is the open ocean on a sunny day?", 
                "response_type": "optionresponse", 
                "variant": ""
            },
            "i4x-edx-AN101-problem-a0effb954cca4759994f1ac9e9434bf4_4_1": {
                "answer": [
                    "a piano", 
                    "a guitar"
                ], 
                "correct": true, 
                "input_type": "checkboxgroup", 
                "question": "Which of the following are musical instruments?", 
                "response_type": "choiceresponse", 
                "variant": ""
            }
        }, 
        "success": "incorrect"
    }, 
    "event_source": "server", 
    "event_type": "problem_check", 
    "host": "precise64", 
    "ip": "NN.N.N.N", 
    "page": "x_module", 
    "time": "2014-03-03T16:19:05.584523+00:00", 
    "username": "AAAAAAAAAA"
 }

.. _common:

********************
Common Fields
********************

This section describes the JSON fields that are common to the schema definitions
of all events.

=====================
``agent`` Field
=====================

**Type:** string

**Details:** Browser agent string of the user who triggered the event. 

.. _context:

===================
``context`` Field
===================

**Type:** dict

**Details:** For all Events, this field includes member fields that
identify:

* The ``course_id`` of the course that generated the event.
* The ``org_id`` of the organization that lists the course. 
* The ``user_id`` of the individual who is performing the action. 
  
When included, ``course_user_tags`` contains a dictionary with the key(s) and
value(s) from the ``user_api_usercoursetag`` table for the user. See
:ref:`user_api_usercoursetag`.

The member fields are blank if values cannot be determined. The ``context``
field can also contain additional member fields that apply to specific events
only: see the description for each type of event.

**History**: Added 23 Oct 2013; ``user_id`` added 6 Nov 2013. Other event fields
may duplicate this data. ``course_user_tags`` added 12 Mar 2014.

===================
``event`` Field
===================

**Type:** dict

**Details:** This field includes member fields that identify specifics of each
triggered event. Different member fields are supplied for different events: see
the description for each type of event.

========================
``event_source`` Field
========================

**Type:** string

**Details:** Specifies whether the triggered event originated in the browser or
on the server. The values in this field are:

* 'browser'
* 'server'
* 'task'

=====================
``event_type`` Field
=====================

**Type:** string

**Details:** The type of event triggered. Values depend on ``event_source``. 

===================
``host`` Field
===================

**Type:** string

**Details:** The site visited by the user, for example, courses.edx.org.

===================
``ip`` Field
===================

**Type:** string

**Details:** IP address of the user who triggered the event. 

===================
``page`` Field
===================

**Type:** string

**Details:** The '$URL' of the page the user was visiting when the event was
emitted.

===================
``session`` Field
===================

**Type:** string

**Details:** This 32-character value is a key that identifies the user's
session. Can be undefined.

===================
``time`` Field
===================

**Type:** string

**Details:** Gives the UTC time at which the event was emitted in 'YYYY-MM-
DDThh:mm:ss.xxxxxx' format.

===================
``username`` Field
===================

**Type:** The username of the user who caused the event to be emitted. This string is
empty for anonymous events, such as when the user is not logged in.

**Details:** string

.. _Student_Event_Types:

****************************************
Student Events
****************************************

This section lists the events that are logged for interactions with the LMS
outside the Instructor Dashboard.

* :ref:`enrollment`

* :ref:`navigational`

* :ref:`video`

* :ref:`pdf`

* :ref:`problem`

* :ref:`ora`

* :ref:`AB_Event_Types`

The descriptions that follow include what each Event represents, the system
component it originates from, and what member fields the ``context`` and
``event`` dict fields contain.

The value in the ``event_source`` field (see the :ref:`common` section above)
distinguishes between events that originate in the browser (in JavaScript) and
events that originate on the server (during the processing of a request).

.. _enrollment:

=========================
Enrollment Events
=========================
.. tracked_command.py
The server emits these events in response to course enrollment
activities completed by a student.

* When a student enrolls in a course, ``edx.course.enrollment.activated`` is
  emitted. On edx.org, this is typically the result of a student clicking
  **Register** for the course.

* When a student unenrolls from a course, ``edx.course.enrollment.deactivated``
  is emitted. On edx.org, this is typically the result of a student clicking
  **Unregister** for the course.

In addition, actions by instructors and course staff members also generate
enrollment events. For the actions that members of the course team complete that
result in these events, see :ref:`instructor_enrollment`.

**Event Source**: Server

**History**: The enrollment Events were added on 03 Dec 2013.

``context`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details and Member Fields
   * - ``path``
     - string
     - The URL path that generated the event: '/change_enrollment'.
       **History**: Added 07 May 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``course_id``
     - string
     - **History**: Maintained for backward compatibility. As of 23 Oct 2013,
       replaced by the ``context`` ``course_id`` field. See the description of
       the :ref:`context`.
   * - ``user_id``
     - integer
     - Identifies the user who was enrolled or unenrolled. 
   * - ``mode``
     - string
     - 'audit', 'honor', 'verified'
   * - ``name``
     - string
     - Identifies the type of event: 'edx.course.enrollment.activated' or
       'edx.course.enrollment.deactivated'. **History**: Added 07 May 2014 to
       replace the ``event`` ``event_type`` field.
   * - ``session``
     - string
     - The Django session ID, if available. Can be used to identify events for a
       specific user within a session. **History**: Added 07 May 2014.

Example
--------

.. reviewers, is this example accurate wrt the new fields?

.. code-block:: json

  {
    "username": "AAAAAAAAAA",
    "host": "courses.edx.org",
    "event_source": "server",
    "event_type": "edx.course.enrollment.activated",
    "context": {
      "course_id": "edX\/DemoX\/Demo_Course",
      "org_id": "edX",
      "path": "/change_enrollment",
      "user_id": 9999999
    },
    "time": "2014-01-26T00:28:28.388782+00:00",
    "ip": "NN.NN.NNN.NNN",
    "event": {
      "course_id": "edX\/DemoX\/Demo_Course",
      "user_id": 9999999,
      "mode": "honor"
      "name": "edx.course.enrollment.activated",
      "session": a14j3ifhskngw0gfgn230g
    },
    "agent": "Mozilla\/5.0 (Windows NT 6.1; WOW64; Trident\/7.0; rv:11.0) like Gecko",
    "page": null
  }

.. _navigational:

==============================
Navigational Events   
==============================
.. display_spec.coffee
The browser emits these events when a user selects a navigational control. 

* ``seq_goto`` is emitted when a user jumps between units in a sequence. 

* ``seq_next`` is emitted when a user navigates to the next unit in a sequence. 

* ``seq_prev`` is emitted when a user navigates to the previous unit in a sequence. 

**Component**: Sequence 

.. **Question:** what does a "sequence" correspond to in Studio? a subsection?

**Event Source**: Browser

``event`` **Member Fields**: All of the navigational events have the same fields
in the ``event`` dict field.

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``old``
     - integer
     - For ``seq_goto``, the index of the unit being jumped from. For
       ``seq_next`` and ``seq_prev``, the index of the unit being navigated away
       from.
   * - ``new``
     - integer
     - For ``seq_goto``, the index of the unit being jumped to. For ``seq_next``
       and ``seq_prev``, the index of the unit being navigated to. 
   * - ``id``
     - integer
     - The edX ID of the sequence. 

``page_close``
---------------

An additional type of event, ``page_close``, originates from within the JavaScript Logger itself.  
.. what is the function of the Logger? what value do the events that it logs have?

**Component**: JavaScript Logger

**Event Source**: Browser

``event`` **Member Fields**: None

.. _video:

==============================
Video Interaction Events   
==============================
.. video_player_spec.js, lms-modules.js
The browser emits these events when a user works with a video.

**Component**: Video

**Event Source**: Browser

``play_video``, ``pause_video``
---------------------------------

* The browser emits ``play_video`` events on video play. 

* The browser emits  ``pause_video`` events on video pause. 

``event`` **Member Fields**: These events have the same ``event`` fields.

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``id``
     - string
     - EdX ID of the video being watched (for example, i4x-HarvardX-PH207x-video-Simple_Random_Sample).
   * - ``code``
     - string
     - YouTube ID of the video being watched (for example, FU3fCJNs94Y).
   * - ``currentTime``
     - float
     - Time the video was played at, in seconds. 
   * - ``speed``
     - string
     - Video speed in use: '0.75', '1.0', '1.25', '1.50'.

``seek_video``
-----------------

The browser emits ``seek_video`` events when a user clicks the playback bar or
transcript to go to a different point in the video file.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``old_time``
     - 
     - The time in the video that the user is coming from.
   * - ``new_time``
     - 
     - The time in the video that the user is going to.
   * - ``type``
     - 
     - The navigational method used to change position within the video.

.. need types


``speed_change_video`` 
------------------------

The browser emits ``speed_change_video`` events when a user selects a different
playing speed for the video.

**History**: Prior to 12 Feb 2014, this event was emitted when the user selected either the same speed or a different speed.  

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``current_time``
     - 
     - The time in the video that the user chose to change the playing speed.  
   * - ``old_speed``
     - 
     - The speed at which the video was playing. 
   * - ``new_speed``
     - 
     - The speed that the user selected for the video to play. 

.. types needed

``load_video``
-----------------

.. %%New documentation, please review.

The browser emits  ``load_video`` events when . 

``event`` **Member Fields**: None

``hide_transcript``
-------------------

.. %%New documentation, please review.

The browser emits  ``hide_transcript`` events when . 

``event`` **Member Fields**: 

``show_transcript``
--------------------

.. %%New documentation, please review.


The browser emits  ``show_transcript`` events when . 

``event`` **Member Fields**: 

.. _pdf:

=================================
Textbook Interaction Events   
=================================
.. pdf-analytics.js
``book``
----------

The browser emits ``book`` events when a user navigates within the PDF Viewer or
the PNG Viewer.

* For textbooks in PDF format, the URL in the common ``page`` field contains
  '/pdfbook/'.
* For textbooks in PNG format, the URL in the common ``page`` field contains
  '/book/'.

**Component**: PDF Viewer, PNG Viewer 

**Event Source**: Browser

**History**: This event changed on 16 Apr 2014 to include ``event`` member
fields ``name`` and ``chapter``.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``type``
     - string
     - 'gotopage' is emitted when a page loads after the student manually enters its number.
   * - 
     -  
     - 'prevpage' is emitted when the next page button is clicked.
   * - 
     - 
     - 'nextpage' is emitted when the previous page button is clicked.
   * - ``name``
     - string
     - For 'gotopage', set to ``textbook.pdf.page.loaded``.
   * - 
     - 
     - For 'prevpage', set to ``textbook.pdf.page.navigatedprevious``. 
   * - 
     - 
     - For 'nextpage', set to ``textbook.pdf.page.navigatednext``. 
   * - 
     - 
     - **History**: Added for events produced by the PDF Viewer on 16 Apr 2014.
   * - ``chapter``
     - string
     - The name of the PDF file. **History**: Added for events produced by the PDF Viewer on 16 Apr 2014.
   * - ``old``
     - integer
     - The original page number. Applies to 'gotopage' event types only.   
   * - ``new``
     - integer
     - Destination page number.

``textbook.pdf.thumbnails.toggled``
------------------------------------

The browser emits ``textbook.pdf.thumbnails.toggled`` events when a user clicks
on the icon to show or hide page thumbnails.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.thumbnails.toggled``
   * - ``chapter``
     -  string
     -  The name of the PDF file.
   * -  ``page``
     -  integer
     -  The number of the page that is open when the user clicks this icon. 

``textbook.pdf.thumbnail.navigated``
------------------------------------

The browser emits ``textbook.pdf.thumbnail.navigated`` events when a user clicks
on a thumbnail image to navigate to a page.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.thumbnail.navigated``
   * - ``chapter`` 
     - string
     - The name of the PDF file. 
   * - ``page``
     - integer
     - The page number of the thumbnail clicked.
   * - ``thumbnail_title``
     - string
     - The identifying name for the destination of the thumbnail. For example, Page 2. 

``textbook.pdf.outline.toggled``
------------------------------------

The browser emits ``textbook.pdf.outline.toggled`` events when a user clicks the
outline icon to show or hide a list of the book's chapters.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.outline.toggled``
   * - ``chapter`` 
     - string
     - The name of the PDF file.
   * - ``page`` 
     - integer
     - The number of the page that is open when the user clicks this link.

``textbook.pdf.chapter.navigated``
------------------------------------

The browser emits ``textbook.pdf.chapter.navigated`` events when a user clicks
on a link in the outline to navigate to a chapter.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.chapter.navigated``
   * - ``chapter``
     - string
     - The name of the PDF file.
   * - ``chapter_title``
     - string
     - The identifying name for the destination of the outline link. 
     
``textbook.pdf.page.navigated``
------------------------------------

The browser emits ``textbook.pdf.page.navigated`` events when a user manually enters
a page number.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.page.navigated``
   * - ``chapter``
     - string
     - The name of the PDF file.
   * - ``page``
     - integer
     - The destination page number entered by the user.

``textbook.pdf.zoom.buttons.changed``
--------------------------------------

The browser emits ``textbook.pdf.zoom.buttons.changed`` events when a user clicks
either the Zoom In or Zoom Out icon.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.zoom.buttons.changed``
   * - ``direction``
     -  string
     -  'in', 'out'
   * - ``chapter``
     - string
     - The name of the PDF file.
   * - ``page``
     - integer
     - The number of the page that is open when the user clicks the icon.

``textbook.pdf.zoom.menu.changed``
------------------------------------

The browser emits ``textbook.pdf.zoom.menu.changed`` events when a user selects a
magnification setting.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.zoom.menu.changed``
   * - ``amount``
     - string
     - '1', '0.75', '1.5', 'custom', 'page_actual', 'auto', 'page_width', 'page_fit'.
   * - ``chapter``
     - string
     - The name of the PDF file.
   * - ``page``
     - integer
     - The number of the page that is open when the user selects this value.

``textbook.pdf.display.scaled``
------------------------------------

The browser emits ``textbook.pdf.display.scaled`` events when the display
magnification changes. These changes occur after a student selects a
magnification setting from the zoom menu or resizes the browser window.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.display.scaled``
   * - ``amount``
     - string
     - The magnification setting; for example, 0.95 or 1.25.
   * - ``chapter``
     - string
     - The name of the PDF file. 
   * - ``page`` 
     - integer
     - The number of the page that is open when the scaling takes place.

``textbook.pdf.display.scrolled``
------------------------------------

The browser emits ``textbook.pdf.display.scrolled`` events each time the displayed
page changes while a user scrolls up or down.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This Event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.display.scrolled``
   * - ``chapter``
     - string
     - The name of the PDF file. 
   * - ``page``
     - integer
     - The number of the page that is open when the scrolling takes place.
   * - ``direction``
     - string
     - 'up', 'down' 

``textbook.pdf.search.executed``
------------------------------------

The browser emits ``textbook.pdf.search.executed`` events when a user searches for a
text value in the file. To reduce the number of events produced, instead of
producing one event per entered character this event defines a search
string as the set of characters that is consecutively entered in the search
field within 500ms of each other.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This Event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1


   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.search.executed``
   * - ``query``
     - string
     - The value in the search field.
   * - ``caseSensitive``
     - boolean
     - 'true' if the case sensitive option is selected, 'false' if this option is not selected.
   * - ``highlightAll``
     - boolean
     - 'true' if the option to highlight all matches is selected, 'false' if this option is not selected.
   * - ``status``
     - string
     - A "not found" status phrase for a search string that is unsuccessful. Blank for successful search strings.
   * - ``chapter``
     - string
     - The name of the PDF file. 
   * - ``page``
     - integer
     - The number of the page that is open when the search takes place.

``textbook.pdf.search.navigatednext``
---------------------------------------------

The browser emits ``textbook.pdf.search.navigatednext`` events when a user clicks
on the Find Next or Find Previous icons for an entered search string.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This Event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.search.navigatednext`` 
   * - ``findprevious``
     - boolean
     - 'true' if the user clicks the Find Previous icon, 'false' if the user clicks the Find Next icon.
   * - ``query``
     - string
     - The value in the search field.
   * - ``caseSensitive``
     - boolean
     - 'true' if the case sensitive option is selected, 'false' if this option is not selected.  
   * - ``highlightAll``
     - boolean
     - 'true' if the option to highlight all matches is selected, 'false' if this option is not selected. 
   * - ``status``
     -  string
     - A "not found" status phrase for a search string that is unsuccessful. Blank for successful search strings.   
   * - ``chapter``
     - string
     - The name of the PDF file. 
   * - ``page``
     - integer
     - The number of the page that is open when the search takes place.

``textbook.pdf.search.highlight.toggled``
---------------------------------------------

The browser emits ``textbook.pdf.search.highlight.toggled`` events when a user
selects or clears the **Highlight All** option for a search.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This Event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.search.highlight.toggled``
   * - ``query``
     - string
     - The value in the search field. 
   * - ``caseSensitive``
     - boolean
     - 'true' if the case sensitive option is selected, false' if this option is not selected. 
   * - ``highlightAll``
     - boolean
     - 'true' if the option to highlight all matches is selected, 'false' if this option is not selected.
   * - ``status``
     - string
     - A "not found" status phrase for a search string that is unsuccessful. Blank for successful search strings.
   * - ``chapter``
     - string
     - The name of the PDF file. 
   * - ``page``
     - integer
     - The number of the page that is open when the search takes place.

``textbook.pdf.search.casesensitivity.toggled``
------------------------------------------------------

The browser emits ``textbook.pdf.search.casesensitivity.toggled`` events when a
user selects or clears the **Match Case** option for a search.

**Component**: PDF Viewer 

**Event Source**: Browser

**History**: This Event was added on 16 Apr 2014.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``name``
     - string
     - ``textbook.pdf.search.casesensitivity.toggled``
   * - ``query``
     - string
     - The value in the search field.
   * - ``caseSensitive``
     - boolean
     - 'true' if the case sensitive option is selected, 'false' if this option is not selected.
   * - ``highlightAll``
     - boolean
     - 'true' if the option to highlight all matches is selected, 'false' if this option is not selected. 
   * - ``status``
     -  string
     - A "not found" status phrase for a search string that is unsuccessful. Blank for successful search strings.
   * - ``chapter``
     - string
     - The name of the PDF file. 
   * - ``page``
     - integer
     - The number of the page that is open when the search takes place.

.. _problem:

=================================
Problem Interaction Events 
=================================
.. lms-modules.js
%%
These events are 
Capa Module

Problem interaction events are emitted by the server or the browser to
capture information about interactions with problems, specifically, problems defined in the edX Capa module.

``problem_check`` (Browser)
----------------------------
.. no sample to check
Both browser interactions and server requests produce ``problem_check`` events.
The browser emits ``problem_check`` events when a user checks a problem.

**Event Source**: Browser 

``event`` **Member Fields**: For browser-emitted ``problem_check`` events, the ``event``
field contains the values of all input fields from the problem being checked,
styled as GET parameters.

``problem_check`` (Server)
----------------------------
.. no sample to check
Both browser interactions and server requests produce ``problem_check`` events.

The server emits ``problem_check`` events when a problem is successfully checked. 
  
**Event Source**: Server

**History**: 

* On 5 Mar 2014, the ``submission`` dictionary was added to the ``event`` field
  and  ``module`` was added to the ``context`` field.

* Prior to 15 Oct 2013, this server-emitted event was named ``save_problem_check``.

* Prior to 15 Jul 2013, this event was emitted twice for the same action.

``context`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``module``
     - dict
     - Provides the specific problem component as part of the context. Contains
       the member field ``display_name``, which is the string value for the
       **Display Name** given to the problem component.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``answers``
     - dict
     - The problem ID and the internal answer identifier in a name:value pair.
       For a component with multiple problems, lists every problem and
       answer.
   * - ``attempts``
     - integer
     - The number of times the user attempted to answer the problem.
   * - ``correct_map``
     - dict
     - For each problem ID value listed by ``answers``, provides:
       
       * ``correctness``: string; 'correct', 'incorrect'
       * ``hint``: string; Gives optional hint. Nulls allowed. 
       * ``hintmode``: string; None, 'on_request', 'always'. Nulls allowed. 
       * ``msg``: string; Gives extra message response.
       * ``npoints``: integer; Points awarded for this ``answer_id``. Nulls allowed.
       * ``queuestate``: dict; None when not queued, else ``{key:'', time:''}``
         where ``key`` is a secret string dump of a DateTime object in the form
         '%Y%m%d%H%M%S'. Nulls allowed. 

   * - ``grade``
     - integer
     - Current grade value. 
   * - ``max_grade``
     - integer
     - Maximum possible grade value.
   * - ``problem_id``
     - string
     - ID of the problem that was checked.
   * - ``state``
     - dict
     - Current problem state.
   * - ``submission``
     - object
     - Provides data about the response made. For components that include
       multiple problems, a separate submission object is provided for each one.

       * ``answer``: string; The value that the student entered, or the display name of the value selected.
       * ``correct``: Boolean; 'true', 'false'
       * ``input_type``: string; The type of value that the student supplies for
         the ``response_type``. Based on the XML element names used in the
         Advanced Editor. Examples include 'checkboxgroup', 'radiogroup',
         'choicegroup', and 'textline'.
       * ``question``: string; Provides the text of the question.
       * ``response_type``: string; The type of problem. Based on the XML
         element names used in the Advanced  Editor. Examples include
         'choiceresponse', 'optionresponse', and 'multiplechoiceresponse'.
       * ``variant``: integer; For problems that use problem randomization
         features such as answer pools or choice shuffling, contains the unique
         ID of the variant that was presented to this user. 

   * - ``success``
     - string
     - 'correct', 'incorrect' 

``problem_check_fail``
-----------------------------
.. no sample to check
The server emits ``problem_check_fail`` events when a problem cannot be checked successfully.

**Event Source**: Server

**History**: Prior to 15 Oct 2013, this event was named ``save_problem_check_fail``.

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``state``  
     - dict
     - Current problem state.
   * - ``problem_id``
     - string
     - ID of the problem being checked.
   * - ``answers`` 
     - dict
     - 
   * - ``failure`` 
     - string
     - 'closed', 'unreset'

``problem_reset``
-----------------------------
.. no sample to check
The browser emits ``problem_reset`` events when a user resets a problem.
.. %%is this an instructor initiated event?
.. return Logger.log('problem_reset', [_this.answers, response.contents], _this.id);


**Event Source**: Browser

``event`` **Member Fields**: None

``problem_rescore``
-----------------------------
.. no sample to check
The server emits ``problem_rescore`` events when a problem is successfully rescored.  

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``state``
     - dict
     - Current problem state.
   * - ``problem_id``
     - string
     - ID of the problem being rescored.
   * - ``orig_score``
     - integer
     - 
   * - ``orig_total``
     - integer
     - 
   * - ``new_score`` 
     - integer
     - 
   * - ``new_total``
     - integer
     - 
   * - ``correct_map``
     - dict
     - See the fields for the ``problem_check`` server event above.
   * - ``success``
     - string
     - 'correct', 'incorrect'
   * - ``attempts``
     - integer
     - 

``problem_rescore_fail``
-----------------------------
.. no sample to check
The server emits ``problem_rescore_fail`` events when a problem cannot be successfully rescored.  

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``state``
     - dict
     - Current problem state. 
   * - ``problem_id``
     - string
     - ID of the problem being checked.
   * - ``failure`` 
     - string
     - 'unsupported', 'unanswered', 'input_error', 'unexpected'

``problem_save``
-----------------------------
.. no sample to check
The browser emits ``problem_save`` events when a user saves a problem.

**Event Source**: Browser

``event`` **Member Fields**: None

``problem_show``
-----------------------------
.. no sample to check
The browser emits ``problem_show`` events when a problem is shown.  %%

**Event Source**: Browser

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``problem``
     - string
     - ID of the problem being shown. For example, i4x://MITx/6.00x/problem/L15:L15_Problem_2).

``reset_problem``
------------------------------------------------
.. no sample to check
The server emits ``reset_problem`` events when a problem has been reset successfully. 
.. %%what is the difference between reset_problem and problem_reset?

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``old_state``
     - dict
     - The state of the problem before the reset was performed. 
   * - ``problem_id``
     - string
     - ID of the problem being reset.
   * - ``new_state``
     - dict
     - New problem state.  

``reset_problem_fail`` 
------------------------------------------------
.. no sample to check
The server emits ``reset_problem_fail`` events when a problem cannot be reset successfully. 

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``old_state``
     - dict
     - The state of the problem before the reset was requested.
   * - ``problem_id``
     - string
     - ID of the problem being reset.  
   * - ``failure``
     - string
     - 'closed', 'not_done'

``show_answer`` 
------------------------------------------------
.. no sample to check
The server emits ``show_answer`` events when the answer to a problem is shown. 

**Event Source**: Server

**History**: The original name for this event was ``showanswer``. 

.. **Question** is this renaming info correct?

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``problem_id``
     - string
     - EdX ID of the problem being shown. 

``save_problem_fail`` 
------------------------------------------------
.. no sample to check

The server emits ``save_problem_fail``  events when a problem cannot be saved successfully. 

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``state``
     - dict
     - Current problem state.
   * - ``problem_id``
     - string
     - ID of the problem being saved. 
   * - ``failure`` 
     - string
     - 'closed', 'done' 
   * - ``answers`` 
     - dict
     - 

``save_problem_success`` 
------------------------------------------------
.. no sample to check
The server emits ``save_problem_success`` events when a problem is saved successfully. 

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``state``
     - dict
     - Current problem state. 
   * - ``problem_id``
     - string
     - ID of the problem being saved. 
   * - ``answers``
     -  dict
     -  

``problem_graded``
-------------------

.. %%New documentation, please review.

The server emits a ``problem_graded`` event %%%

.. return Logger.log('problem_graded', [_this.answers, response.contents], _this.id);


``event`` **Member Fields**: The ``event`` field delivers the values entered
for the problem component in Studio as a string. The display name, problem
text, and choices or response field labels are included.

.. _ora:

======================================
Open Response Assessment Events 
======================================
.. reviewers: I did not spend much editing time on these descriptions, I only
.. changed the presentation. Please review for accuracy only.
**History**: The events in this section record interactions with the prototype
implementation of open response assessment (ORA) problem types. As of May 2014,
new courses are not using this implementation of ORA and a complete redesign of
this feature is in limited release.

``oe_hide_question`` and ``oe_show_question``
---------------------------------------------------------------------------

The browser emits ``oe_hide_question`` and ``oe_show_question`` events when the
user hides or redisplays a combined open-ended problem.

**History**: These events were previously named ``oe_hide_problem`` and
``oe_show_problem``.

**Component**: Combined Open-Ended

**Event Source**: Browser

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``location``
     - string
     - The location of the question whose prompt is being shown or hidden.

``rubric_select`` 
----------------------

**Component**: Combined Open-Ended

**Event Source**: Browser

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``location``
     - string
     - The location of the question whose rubric is being selected. 
   * - ``selection``
     - integer
     - Value selected on rubric. 
   * - ``category``
     - integer
     - Rubric category selected.

``oe_show_full_feedback`` and ``oe_show_respond_to_feedback``
------------------------------------------------------------------

**Component**: Combined Open-Ended

**Event Source**: Browser

``event`` **Member Fields**: None.

``oe_feedback_response_selected`` 
--------------------------------------------

**Component**: Combined Open-Ended

**Event Source**: Browser

``event`` **Member Fields**:

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``value``
     - integer
     - Value selected in the feedback response form.

``peer_grading_hide_question`` and ``peer_grading_show_question``
---------------------------------------------------------------------
.. I couldn't find these names in any js file. peer_grading_problem.js includes oe_hide or show_question.
The browser emits ``peer_grading_hide_question`` and
``peer_grading_show_question`` events when the user hides or redisplays a
problem that is peer graded.

**History**: These events were previously named ``peer_grading_hide_problem`` and ``peer_grading_show_problem``.

**Component**: Peer Grading

**Event Source**: Browser

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``location``
     - string
     - The location of the question whose prompt is being shown or hidden.

``staff_grading_hide_question`` and ``staff_grading_show_question``
-----------------------------------------------------------------------
.. staff_grading.js
The browser emits ``staff_grading_hide_question`` and
``staff_grading_show_question`` events when the user hides or redisplays a
problem that is staff graded.

**History**: These events were previously named ``staff_grading_hide_problem`` and ``staff_grading_show_problem``.

**Component**: Staff Grading

**Event Source**: Browser

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``location``
     - string
     - The location of the question whose prompt is being shown or hidden.

.. _AB_Event_Types:

==========================
A/B Testing Events
==========================

Course authors can configure course content to present modules that contain
other modules. For example, a parent module can include two child modules with
content that differs in some way for comparison testing. When a student
navigates to a module that is set up for A/B testing in this way, the student is
randomly assigned to a group and shown only one of the child modules.

* Internally, a *partition* defines the type of experiment: between video and
  text, for example. A course can include any number of modules with the same
  partition, or experiment type.

* For each partition, students are randomly assigned to a *group*. The group
  determines which content, either video or text in this example, is shown by
  every module with that partitioning.

The events that follow apply to modules that are set up to randomly assign
students to groups so that different content can be shown to the different
groups.

**History**: These events were added on 12 Mar 2014.

``assigned_user_to_partition``
----------------------------------

When a student views a module that is set up to test different child modules,
the server checks the ``user_api_usercoursetag`` table for the student's
assignment to the relevant partition, and to a group for that partition. 

* The partition ID is the ``user_api_usercoursetag.key``.

* The group ID is the ``user_api_usercoursetag.value``.

If the student does not yet have an assignment, the server emits an
``assigned_user_to_partition`` event and adds a row to the
``user_api_usercoursetag`` table for the student. See
:ref:`user_api_usercoursetag`.

.. note:: After this event is emitted, the common ``context`` field in all subsequent events includes a ``course_user_tags`` member field with the student's assigned partition and group.

**Component**: Split Test

**Event Source**: Browser

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``group_id``
     - integer
     - Identifier of the group.
   * - ``group_name``
     - string
     - Name of the group. 
   * - ``partition_id``
     - integer
     - Identifier for the partition, in the format ``xblock.partition_service.partition_ID`` where ID is an integer.
   * - ``partition_name``
     - string
     - Name of the partition.

``child_render``
----------------------------------

When a student views a module that is set up to test different content using
child modules, the server emits a ``child_render`` event to identify
the child module that was shown to the student.

**Component**: Split Test

**Event Source**: Server

``event`` **Member Fields**: 

.. list-table::
   :widths: 15 15 60
   :header-rows: 1

   * - Field
     - Type
     - Details
   * - ``child-id``
     - string
     - ID of the module that displays to the student. 

.. _Instructor_Event_Types:

*************************
Instructor Events
*************************

The Instructor Event table lists the events that the server emits as a
result of course team interaction with the Instructor Dashboard in the LMS.

.. need to verify and get a description for each of these%%

=================
``modify_access``
=================

when the course staff or instructor role is assigned to a user or revoked


=================================
``update_forum_role_membership``
=================================

emitted when these roles are assigned or revoked

====================================================================
``get_students_features``, ``get_students_features/csv``
====================================================================

student demographic “profile” report: get_students_features/csv (for downloadable file) or get_students_features (for display)


===================================================
``calculate_grades_csv``, ``dump-grades``
===================================================

grade report: calculate_grades_csv (when generate report) or dump-grades when
display report. (I could not verify that an event is emitted when the link to
the downloadable file is clicked. - Alison)

==================================
``get_student_progress_url``
==================================

course progress chart: get_student_progress_url

=================
``list-students``
=================

report of enrolled students: list-students

=================
``get_anon_ids``
=================

report of anonymized student IDs: get_anon_ids

=================
``instructor``
=================

responses to a specific problem: instructor (with an event value that identifies
the button clicked as prefix) 

report of students who can enroll: instructor (with an event
value that identifies the button clicked)


.. _rescore_all:

``rescore-all-submissions`` and ``reset-all-attempts`` Event Types   
-----------------------------------------------------------------------

**Description**: 

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``problem``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``course``          | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _rescore_student:

 ``delete-student-module-state`` and ``rescore-student-submission`` Event Types   
-----------------------------------------------------------------------------------
.. previously a comma-separated list; "Rows identical after the second column" (which means the name and description columns) were combined
**Description**: 

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``problem``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``student``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``course``          | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _reset_attempts:

``reset-student-attempts`` Event Type
-----------------------------------------------------------------------------------

**Description**: 

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``old_attempts``    | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``student``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``problem``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``instructor``      | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _progress:

``get-student-progress-page`` Event Type
-----------------------------------------------------------------------------------

**Description**: 

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``student``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``instructor``      | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``course``          | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _list_staff:

``list-staff`` Event Types   
------------------------------------------------
.. previously a comma-separated list; "Rows identical after the second column" (which means the name and description columns) were combined
**Description**: 

* ``list-staff``

* ``list-instructors``

* ``list-beta-testers``

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: None

.. _instructor:

``*_instructor`` Event Types   
------------------------------------------------
.. previously a comma-separated list; "Rows identical after the second column" (which means the name and description columns) were combined
**Description**: 

* ``add-instructor``

* ``remove-instructor``

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``instructor``      | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _list_forum:

``list_forum_*`` Event Types   
------------------------------------------------
.. previously a comma-separated list; "Rows identical after the second column" (which means the name and description columns) were combined
**Description**: 

* ``list-forum-admins``

* ``list-forum-mods``

* ``list-forum-community-TAs``

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``course``          | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _forum:

Managing Discussion Staff Event Types   
------------------------------------------------
.. previously a comma-separated list; "Rows identical after the second column" (which means the name and description columns) were combined
**Description**: 

* ``remove-forum-admin``

* ``add-forum-admin``

* ``remove-forum-mod``

* ``add-forum-mod``

* ``remove-forum-community-TA``

* ``add-forum-community-TA``

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``username``        | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``course``          | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _histogram:

``psychometrics-histogram-generation`` Event Type  
------------------------------------------------------

**Description**: 

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``problem``         | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+

.. _user_group:

``add-or-remove-user-group`` Event Type  
------------------------------------------------------

**Description**: 

**Component**: Instructor Dashboard

**Event Source**: Server

``event`` **Fields**: 

+---------------------+---------------+---------------------------------------------------------------------+
| Field               | Type          | Details                                                             |
+=====================+===============+=====================================================================+
| ``event_name``      | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``user``            | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+
| ``event``           | string        |                                                                     |
+---------------------+---------------+---------------------------------------------------------------------+


.. code-block:: python

 def _section_course_info(course_id, access):
    """ Provide data for the corresponding dashboard section """
    course = get_course_by_id(course_id, depth=None)

    course_id_dict = Location.parse_course_id(course_id)

    section_data = {
        'section_key': 'course_info',
        'section_display_name': _('Course Info'),
        'access': access,
        'course_id': course_id,
        'course_org': course_id_dict['org'],
        'course_num': course_id_dict['course'],
        'course_name': course_id_dict['name'],
        'course_display_name': course.display_name,
        'enrollment_count': CourseEnrollment.num_enrolled_in(course_id),
        'has_started': course.has_started(),
        'has_ended': course.has_ended(),
        'list_instructor_tasks_url': reverse('list_instructor_tasks', kwargs={'course_id': course_id}),
    }

 def _section_membership(course_id, access):
    """ Provide data for the corresponding dashboard section """
    section_data = {
        'section_key': 'membership',
        'section_display_name': _('Membership'),
        'access': access,
        'enroll_button_url': reverse('students_update_enrollment', kwargs={'course_id': course_id}),
        'unenroll_button_url': reverse('students_update_enrollment', kwargs={'course_id': course_id}),
        'modify_beta_testers_button_url': reverse('bulk_beta_modify_access', kwargs={'course_id': course_id}),
        'list_course_role_members_url': reverse('list_course_role_members', kwargs={'course_id': course_id}),
        'modify_access_url': reverse('modify_access', kwargs={'course_id': course_id}),
        'list_forum_members_url': reverse('list_forum_members', kwargs={'course_id': course_id}),
        'update_forum_role_membership_url': reverse('update_forum_role_membership', kwargs={'course_id': course_id}),
    }
    return section_data


 def _section_student_admin(course_id, access):
    """ Provide data for the corresponding dashboard section """
    section_data = {
        'section_key': 'student_admin',
        'section_display_name': _('Student Admin'),
        'access': access,
        'get_student_progress_url_url': reverse('get_student_progress_url', kwargs={'course_id': course_id}),
        'enrollment_url': reverse('students_update_enrollment', kwargs={'course_id': course_id}),
        'reset_student_attempts_url': reverse('reset_student_attempts', kwargs={'course_id': course_id}),
        'rescore_problem_url': reverse('rescore_problem', kwargs={'course_id': course_id}),
        'list_instructor_tasks_url': reverse('list_instructor_tasks', kwargs={'course_id': course_id}),
    }
    return section_data


 def _section_extensions(course):
    """ Provide data for the corresponding dashboard section """
    section_data = {
        'section_key': 'extensions',
        'section_display_name': _('Extensions'),
        'units_with_due_dates': [(title_or_url(unit), unit.location.url())
                                 for unit in get_units_with_due_date(course)],
        'change_due_date_url': reverse('change_due_date', kwargs={'course_id': course.id}),
        'reset_due_date_url': reverse('reset_due_date', kwargs={'course_id': course.id}),
        'show_unit_extensions_url': reverse('show_unit_extensions', kwargs={'course_id': course.id}),
        'show_student_extensions_url': reverse('show_student_extensions', kwargs={'course_id': course.id}),
    }
    return section_data


 def _section_data_download(course_id, access):
    """ Provide data for the corresponding dashboard section """
    section_data = {
        'section_key': 'data_download',
        'section_display_name': _('Data Download'),
        'access': access,
        'get_grading_config_url': reverse('get_grading_config', kwargs={'course_id': course_id}),
        'get_students_features_url': reverse('get_students_features', kwargs={'course_id': course_id}),
        'get_anon_ids_url': reverse('get_anon_ids', kwargs={'course_id': course_id}),
        'list_instructor_tasks_url': reverse('list_instructor_tasks', kwargs={'course_id': course_id}),
        'list_report_downloads_url': reverse('list_report_downloads', kwargs={'course_id': course_id}),
        'calculate_grades_csv_url': reverse('calculate_grades_csv', kwargs={'course_id': course_id}),
    }
    return section_data


 def _section_send_email(course_id, access, course):
    """ Provide data for the corresponding bulk email section """
    html_module = HtmlDescriptor(
        course.system,
        DictFieldData({'data': ''}),
        ScopeIds(None, None, None, 'i4x://dummy_org/dummy_course/html/dummy_name')
    )
    fragment = course.system.render(html_module, 'studio_view')
    fragment = wrap_xblock('LmsRuntime', html_module, 'studio_view', fragment, None, extra_data={"course-id": course_id})
    email_editor = fragment.content
    section_data = {
        'section_key': 'send_email',
        'section_display_name': _('Email'),
        'access': access,
        'send_email': reverse('send_email', kwargs={'course_id': course_id}),
        'editor': email_editor,
        'list_instructor_tasks_url': reverse('list_instructor_tasks', kwargs={'course_id': course_id}),
        'email_background_tasks_url': reverse('list_background_email_tasks', kwargs={'course_id': course_id}),
    }
    return section_data


 def _section_analytics(course_id, access):
    """ Provide data for the corresponding dashboard section """
    section_data = {
        'section_key': 'analytics',
        'section_display_name': _('Analytics'),
        'access': access,
        'get_distribution_url': reverse('get_distribution', kwargs={'course_id': course_id}),
        'proxy_legacy_analytics_url': reverse('proxy_legacy_analytics', kwargs={'course_id': course_id}),
    }
    return section_data


 def _section_metrics(course_id, access):
    """Provide data for the corresponding dashboard section """
    section_data = {
        'section_key': 'metrics',
        'section_display_name': ('Metrics'),
        'access': access,
        'sub_section_display_name': get_section_display_name(course_id),
        'section_has_problem': get_array_section_has_problem(course_id),
        'get_students_opened_subsection_url': reverse('get_students_opened_subsection'),
        'get_students_problem_grades_url': reverse('get_students_problem_grades'),
    }



+----------------------------------------+---------------------+---------------+
| Event                                  | ``event`` Fields    | Type          |
+----------------------------------------+---------------------+---------------+
| ``list-students``,                     |                     |               |
| ``dump-grades``,                       |                     |               |
| ``dump-grades-raw``,                   |                     |               |
| ``dump-grades-csv``,                   |                     |               |
| ``dump-grades-csv-raw``,               |                     |               |
| ``dump-answer-dist-csv``,              |                     |               |
| ``dump-graded-assignments-config``     |                     |               |
+----------------------------------------+---------------------+---------------+
| ``rescore-all-submissions``,           | ``problem``         | string        |
| ``reset-all-attempts``                 +---------------------+---------------+
|                                        | ``course``          | string        |
+----------------------------------------+---------------------+---------------+
| ``delete-student-module-state``,       | ``problem``         | string        |
| ``rescore-student-submission``         +---------------------+---------------+
|                                        | ``student``         | string        |
|                                        +---------------------+---------------+
|                                        | ``course``          | string        |
+----------------------------------------+---------------------+---------------+
| ``reset-student-attempts``             | ``old_attempts``    | string        |
|                                        +---------------------+---------------+
|                                        | ``student``         | string        |
|                                        +---------------------+---------------+
|                                        | ``problem``         | string        |
|                                        +---------------------+---------------+
|                                        | ``instructor``      | string        |
|                                        +---------------------+---------------+
|                                        | ``course``          | string        |
+----------------------------------------+---------------------+---------------+
| ``get-student-progress-page``          | ``student``         | string        |
|                                        +---------------------+---------------+
|                                        | ``instructor``      | string        |
|                                        +---------------------+---------------+
|                                        | ``course``          | string        |
+----------------------------------------+---------------------+---------------+
| ``list-staff``,                        |                     |               |
| ``list-instructors``,                  |                     |               |
| ``list-beta-testers``                  |                     |               |
+----------------------------------------+---------------------+---------------+
| ``add-instructor``,                    | ``instructor``      | string        |
| ``remove-instructor``                  |                     |               |
|                                        |                     |               |
+----------------------------------------+---------------------+---------------+
| ``list-forum-admins``,                 | ``course``          | string        |
| ``list-forum-mods``,                   |                     |               |
| ``list-forum-community-TAs``           |                     |               |
+----------------------------------------+---------------------+---------------+
| ``remove-forum-admin``,                | ``username``        | string        |
| ``add-forum-admin``,                   |                     |               |
| ``remove-forum-mod``,                  |                     |               |
| ``add-forum-mod``,                     +---------------------+---------------+
| ``remove-forum-community-TA``,         | ``course``          | string        |
| ``add-forum-community-TA``             |                     |               |
+----------------------------------------+---------------------+---------------+
| ``psychometrics-histogram-generation`` | ``problem``         | string        |
|                                        |                     |               |
|                                        |                     |               |
+----------------------------------------+---------------------+---------------+
| ``add-or-remove-user-group``           | ``event_name``      | string        |
|                                        +---------------------+---------------+
|                                        | ``user``            | string        |
|                                        +---------------------+---------------+
|                                        | ``event``           | string        |
+----------------------------------------+---------------------+---------------+

.. _instructor_enrollment:

=============================
Instructor Enrollment Events
=============================

In addition to the enrollment events that are generated when students 
enroll in or unenroll from a course, actions by instructors and course staff
members also generate enrollment events.

* When a course author creates a course, his or her user account is enrolled in
  the course and the server emits an ``edx.course.enrollment.activated`` event.

* When a user with the Instructor or Course Staff role enrolls in a course, the
  server emits ``edx.course.enrollment.activated``. The server emits
  ``edx.course.enrollment.deactivated`` events when these users unenroll from a
  course.

* When a user with the Instructor or Course Staff role uses the **Batch
  Enrollment** feature to enroll students or other staff members in a course,
  the server emits an ``edx.course.enrollment.activated`` event for each
  enrollment. When this feature is used to unenroll students from a course, the
  server emits a ``edx.course.enrollment.deactivated`` for each unenrollment.

For details about the enrollment events, see :ref:`enrollment`.