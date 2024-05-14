#!/bin/bash

# Step 1: Run npm pack
npm pack

# Step 2: Move the generated file to the desired location and replace the existing file with the new one
generated_file="xbeshui-core-2.0.0.tgz"  # Replace "xbeshui-core-1.1.5.tgz" with the actual name of the generated file
desired_location="../xbos/"    # Replace "/path/to/desired/location" with the desired location

# Check if the desired location exists
if [ ! -d "$desired_location" ]; then
  echo "Desired location does not exist. Please create it and try again."
  exit 1
fi

# Move the generated file to the desired location
mv "$generated_file" "$desired_location"

# Navigate to the desired location
cd "$desired_location" || exit

# Extract the contents of the generated file
tar -xzvf "$generated_file"

echo "Process completed successfully."
