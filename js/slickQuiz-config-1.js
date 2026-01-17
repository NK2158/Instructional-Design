// Setup your quiz text and questions here

// NOTE: PAY ATTENTION TO COMMAS!

var quizJSON = {
    "info": {
        "name":    "Week 5 Review: Monopolistic Competition and Oligopoly",
        "main":    "<p>Please review the following questions to reinforce your understanding of monopolistic competition, oligopoly, and market power.</p>",
        "results": "<h5>Learn More</h5><p>If you didn't do as well as you'd hoped, please go back and review the week's material. Refresh the page and return to this tab to try the review again.</p>",
        "level1":  "Excellent",
        "level2":  "Good",
        "level3":  "Okay",
        "level4":  "Needs Improvement",
        "level5":  "Poor" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is NOT a characteristic of monopolistic competition?",
            "a": [
                {"option": "Large numbers of buyers and sellers",    "correct": false},
                {"option": "Heterogeneous products",    "correct": false},
                {"option": "Significant barriers to entry",    "correct": true},
                {"option": "Relative ease of entry and exit",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Monopolistic competition is characterized by easy entry and exit, not significant barriers.</p>",
            "incorrect": "<p><span>Not quite.</span> Monopolistic competition has easy entry and exit, unlike oligopolies which have barriers to entry.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "How do firms in monopolistic competition primarily differentiate their products?",
            "a": [
                {"option": "Only through pricing strategies",    "correct": false},
                {"option": "Through product attributes, service, location, and branding",   	"correct": true},
                {"option": "By forming cartels with competitors",    "correct": false},
                {"option": "Through government regulation", 	"correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!</span> Firms use multiple methods including product attributes, service quality, location, and brand advertising to differentiate themselves.</p>",
            "incorrect": "<p><span>Not quite.</span> Firms in monopolistic competition use various differentiation strategies including product attributes, service, location, and branding.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Which type of merger is most likely to reduce competition and create market power?",
            "a": [
                {"option": "Vertical merger",    "correct": false},
                {"option": "Horizontal merger",    "correct": true},
                {"option": "Conglomerate merger",  	"correct": false},
                {"option": "All mergers equally reduce competition",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Perfect!</span> Horizontal mergers between firms in the same industry are most likely to reduce competition.</p>",
            "incorrect": "<p><span>Think again.</span> Horizontal mergers occur between firms in the same industry and are most likely to reduce competition.</p>" // no comma here
        },
		{ // Question 4 - True or False
            "q": "Natural monopolies should always be broken up by the government to increase competition.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Natural monopolies often exist because one firm can produce at lower costs than multiple firms. They are typically regulated rather than broken up.</p>",
            "incorrect": "<p><span>Not quite.</span> Natural monopolies occur when one firm can produce more efficiently than multiple firms. Breaking them up would actually increase costs, so they are usually regulated instead.</p>" // no comma here
        } // no comma here
    ]
};
