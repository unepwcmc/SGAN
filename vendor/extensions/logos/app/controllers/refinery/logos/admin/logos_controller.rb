module Refinery
  module Logos
    module Admin
      class LogosController < ::Refinery::AdminController

        crudify :'refinery/logos/logo',
                :xhr_paging => true

      end
    end
  end
end
