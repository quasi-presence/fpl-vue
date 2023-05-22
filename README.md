# Fantasy Points League (FPL) - FPL-VUE

## Project overview

See the main FPL repo for project overview [README](https://github.com/quasi-presence/fpl#readme)

## Prerequisites

To run FPL-VUE application you'll need to setup a running FPL backend.  Currently there is only a single backend option.

See [fpl-rails](https://github.com/quasi-presence/fpl-rails)

## Setup

FPL-VUE setup is a docker based setup.

1. Checkout the repo
2. Copy `.env` to `.env.local`
3. Update `VITE_BACKEND_URL` in .env.local file to point to your running backend instance
4. Update `docker-compose.yml` as needed
5. Run `docker-compose run app yarn install`
6. Start app by running `docker-compose up -d`

## Implemented Features

  * [x] Home page
  * [x] Sign up
  * [x] Login
  * [x] Logout
  * [x] View dashboard
  * [x] View profile
  * [x] Update profile
  * [ ] Create league
  * [ ] View dashboard/leagues
  * [ ] View league details
  * [ ] Invite league members
  * [ ] Create league event/schedule
  * [ ] Member notifications
    * [ ] Member picks
    * [ ] Event results
  * [ ] Select event picks
  * [ ] Enter event results
  * [ ] Collect real league data via APIs or web scrapers
    * [ ] Competitors
    * [ ] Scheduled events
    * [ ] Event results
  * [ ] TBD

## Notes

* This is my first vue.js project and haven't had time to fully explore vue.js best practices/patterns so I'm currently
  experimenting to see what sticks:
  * Added multiple layout support
  * Playing with the concept of using `Actions` as consistent interface for components to invoke system behavior
  * Focusing stores more on storing the state than providing system actions
* Decided to use latest version of vue.js and the Composition API instead of the Options API since it's different
  than my previous experience with React
* Explored potential testing but not utilizing a traditional TDD approach at the moment
* Landed on using Tailwind CSS for now vs. another css/component library since it can be easily ported to other frameworks
* Mostly using interfaces for now vs actual classes to quickly get things going
