const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    welcome() {
        this.log('Welcome to the generator for a gulp scss typescript frontend boilerplate!');
    }

    writing() {
        // Copy all base files
        this.fs.copy(
            this.templatePath('.editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copy(
            this.templatePath('.gitattributes'),
            this.destinationPath('.gitattributes')
        );

        this.fs.copy(
            this.templatePath('.scss-lint.yml'),
            this.destinationPath('.scss-lint.yml')
        );

        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );

        this.fs.copy(
            this.templatePath('package.json'),
            this.destinationPath('package.json')
        );

        this.fs.copy(
            this.templatePath('README.md'),
            this.destinationPath('README.md')
        );

        this.fs.copy(
            this.templatePath('tsconfig.json'),
            this.destinationPath('tsconfig.json')
        );

        // Copy all folders
        this.fs.copy(
            this.templatePath('gulp'),
            this.destinationPath('gulp')
        );

        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath('src')
        );
    }

    end() {
        this.log(' ');
		this.log(
			'Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally.'
		);
		this.log(' ');
		this.log("If you're not sure how to do this, read this for more info:");
		this.log('https://coder-coder.com/install-gulp-globally-on-windows/');
		this.log(' ');
		this.log(
			"Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!"
		);
		this.log(' ');
    }
}