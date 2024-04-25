import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  template: `
    <footer class="bg-orange-400 shadow dark:bg-gray-800">
      <div class="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span class="text-lg text-white dark:text-gray-400">
          Christian Michelle Torres Martínez
      </span>
      </div>
    </footer>
  `
})

export class FooterComponent {
}
