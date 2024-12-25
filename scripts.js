
const dogBreeds = {
    "high": {
        "yes": {
            "house": {
                "small": ["Beagle", "Border Collie", "Cocker Spaniel", "Miniature Schnauzer", "Australian Terrier"],
                "medium": ["Labrador Retriever", "Golden Retriever", "Australian Shepherd", "Vizsla", "Dalmatian"], 
                "large": ["German Shepherd", "Alaskan Malamute", "Rottweiler", "Doberman", "Boxer"] 
            },
            "apartment": {
                "small": ["French Bulldog", "Cavalier King Charles Spaniel", "Pug", "Yorkshire Terrier", "Dachshund"], 
                "medium": ["Shiba Inu", "Bulldog", "Jack Russell Terrier", "Boston Terrier", "Chihuahua"], 
                "large": ["Great Dane", "Saint Bernard"] 
            }
        },
        "no": {
            "house": {
                "small": ["Dachshund", "Chihuahua", "Miniature Schnauzer", "Pekingese", "Shih Tzu"], 
                "medium": ["Basset Hound", "Boxer", "Cocker Spaniel", "Beagle", "Basset Hound"], 
                "large": ["Saint Bernard", "Doberman", "Mastiff", "Rottweiler", "Bullmastiff"] 
            },
            "apartment": {
                "small": ["Pug", "Yorkshire Terrier", "Shih Tzu", "Cocker Spaniel", "French Bulldog"], 
                "medium": ["Miniature Schnauzer", "English Bulldog", "Chihuahua", "Maltese", "Shiba Inu"], 
                "large": ["Great Dane"] 
            }
        }
    },
    "medium": {
        "yes": {
            "house": {
                "small": ["Beagle", "Basset Hound", "Cocker Spaniel", "Dachshund", "Miniature Schnauzer"], 
                "medium": ["Bulldog", "Labrador Retriever", "Boxer", "Collie", "Shih Tzu"], 
                "large": ["Golden Retriever", "Australian Shepherd", "German Shepherd", "Collie", "Cocker Spaniel"] 
            },
            "apartment": {
                "small": ["French Bulldog", "Shih Tzu", "Pug", "Maltese", "Chihuahua"], 
                "medium": ["English Bulldog", "Miniature Schnauzer", "Cocker Spaniel", "Shiba Inu", "Maltese"], 
                "large": ["Great Dane"] 
            }
        },
        "no": {
            "house": {
                "small": ["Chihuahua", "Dachshund", "Yorkshire Terrier", "Pug", "Basset Hound"], 
                "medium": ["Cocker Spaniel", "Basset Hound", "Boxer", "Miniature Schnauzer", "Cavalier King Charles Spaniel"], 
                "large": ["Rottweiler", "Doberman", "Saint Bernard", "Mastiff", "Bullmastiff"] 
            },
            "apartment": {
                "small": ["Shih Tzu", "Yorkshire Terrier", "Pug", "French Bulldog", "Maltese"], 
                "medium": ["Cocker Spaniel", "English Bulldog", "Miniature Schnauzer", "Shiba Inu", "French Bulldog"], 
                "large": ["Great Dane"] 
            }
        }
    },
    "low": {
        "yes": {
            "house": {
                "small": ["Shih Tzu", "Chihuahua", "Pug", "Maltese", "Yorkshire Terrier"], 
                "medium": ["Basset Hound", "Bulldog", "Cocker Spaniel", "Cavalier King Charles Spaniel", "Pekingese"], 
                "large": ["Saint Bernard", "Mastiff", "Bernese Mountain Dog", "Newfoundland", "Great Dane"] 
            },
            "apartment": {
                "small": ["Pug", "Shih Tzu", "Maltese", "French Bulldog", "Yorkshire Terrier"], 
                "medium": ["Cocker Spaniel", "Miniature Schnauzer", "Basset Hound", "Chihuahua", "Shih Tzu"], 
                "large": ["Great Dane"] 
            }
        },
        "no": {
            "house": {
                "small": ["Chihuahua", "Miniature Schnauzer", "Maltese", "Yorkshire Terrier", "Shih Tzu"], 
                "medium": ["Bulldog", "Basset Hound", "French Bulldog", "Boxer", "Beagle"], 
                "large": ["Rottweiler", "Saint Bernard", "Mastiff", "Newfoundland", "Great Dane"] 
            },
            "apartment": {
                "small": ["Shih Tzu", "Yorkshire Terrier", "Pug", "Maltese", "Chihuahua"], 
                "medium": ["English Bulldog", "French Bulldog", "Miniature Schnauzer", "Shiba Inu", "Maltese"], 
                "large": ["Great Dane"] 
            }
        }
    }
};


function getBreedRecommendations() {
    const activityLevel = document.getElementById('activityLevel').value;
    const hasKids = document.getElementById('hasKids').value;
    const livingSpace = document.getElementById('livingSpace').value;
    const dogSize = document.getElementById('dogSize').value;

    const recommendedBreeds = dogBreeds[activityLevel][hasKids][livingSpace][dogSize];

    const resultsSection = document.getElementById('results');
    const breedList = document.getElementById('recommendedBreeds');
    
    breedList.innerHTML = ''; // Clear previous results

    if (recommendedBreeds) {
        recommendedBreeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
        });
        resultsSection.classList.remove('hidden');
    } else {
        alert("No suitable breeds found. Please adjust your preferences.");
    }
}
