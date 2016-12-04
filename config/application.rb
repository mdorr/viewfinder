require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Viewfinder
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Enable iFrame support on Heroku, see http://www.seanbehan.com/how-to-enable-iframe-support-on-heroku-with-ruby-on-rails-and-sinatra
    config.action_dispatch.default_headers = {
        'X-Frame-Options' => 'ALLOWALL'
    }
  end
end
