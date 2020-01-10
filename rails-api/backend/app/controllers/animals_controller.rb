class AnimalsController < ApplicationController
  def index
    animals = Animal.all
    render json: animals
  end

  def create
    species = Species.find_or_create_by(name: params['species'])
    animal = Animal.create(species_id: species.id, name: params['name'], gender: params['gender'].to_i )

    render json: animal
  end
end
