# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def word_contains (array, string)
    
    #  filter array method and checks for charater to print
    p array.filter {|value| value.include? string}

end

word_contains(beverages_array, filter_letter_o)
word_contains(beverages_array, filter_letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def state_sorter(hash)  
    return hash.values.flatten.sort #flatten takes nested arrays and makes them one dimensional and sort arranges them into ascending order
end

p state_sorter(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model = '', wheels = 2, current_speed = 0)
      @model = model           # Instance variable to store the bike's model
      @wheels = wheels         # Instance variable to store the number of wheels
      @current_speed = current_speed   # Instance variable to store the current speed
    end
  
    def bike_info
      "The bike is a #{@model} with #{@wheels} wheels and has a current speed of #{@current_speed}"
      # Returns a string containing bike information
    end
  
    def pedal_faster(num)
      @current_speed += num    # Increase the current speed by the given number
    end
  
    def brake(num)
      @current_speed -= num    # Decrease the current speed by the given number
      @current_speed = 0 if @current_speed < 0    # Set current speed to 0 if it becomes negative
    end
  end
  

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
