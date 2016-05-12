every 15.minutes, :roles => [:app] do
  rake 'ts:index'
end