"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../models/command");
const open = require('open');
class DocCommand extends command_1.Command {
    async run(options) {
        if (!options.keyword) {
            this.logger.error('You should specify a keyword, for instance, `ng doc ActivatedRoute`.');
            return 0;
        }
        let searchUrl = `https://angular.io/api?query=${options.keyword}`;
        if (options.search) {
            searchUrl = `https://www.google.com/search?q=site%3Aangular.io+${options.keyword}`;
        }
        // We should wrap `open` in a new Promise because `open` is already resolved
        await new Promise(() => {
            open(searchUrl, {
                wait: false,
            });
        });
    }
}
exports.DocCommand = DocCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWltcGwuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXIvY2xpL2NvbW1hbmRzL2RvYy1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7O0FBRUgsK0NBQTRDO0FBSTVDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3QixNQUFhLFVBQVcsU0FBUSxpQkFBeUI7SUFDaEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFxQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1lBRTFGLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLFNBQVMsR0FBRyxnQ0FBZ0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xFLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixTQUFTLEdBQUcscURBQXFELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwRjtRQUVELDRFQUE0RTtRQUM1RSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFuQkQsZ0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1hbmQnO1xuaW1wb3J0IHsgQXJndW1lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2hlbWEgYXMgRG9jQ29tbWFuZFNjaGVtYSB9IGZyb20gJy4vZG9jJztcblxuY29uc3Qgb3BlbiA9IHJlcXVpcmUoJ29wZW4nKTtcblxuZXhwb3J0IGNsYXNzIERvY0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kPERvY0NvbW1hbmRTY2hlbWE+IHtcbiAgcHVibGljIGFzeW5jIHJ1bihvcHRpb25zOiBEb2NDb21tYW5kU2NoZW1hICYgQXJndW1lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmtleXdvcmQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdZb3Ugc2hvdWxkIHNwZWNpZnkgYSBrZXl3b3JkLCBmb3IgaW5zdGFuY2UsIGBuZyBkb2MgQWN0aXZhdGVkUm91dGVgLicpO1xuXG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IHNlYXJjaFVybCA9IGBodHRwczovL2FuZ3VsYXIuaW8vYXBpP3F1ZXJ5PSR7b3B0aW9ucy5rZXl3b3JkfWA7XG4gICAgaWYgKG9wdGlvbnMuc2VhcmNoKSB7XG4gICAgICBzZWFyY2hVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlJTNBYW5ndWxhci5pbyske29wdGlvbnMua2V5d29yZH1gO1xuICAgIH1cblxuICAgIC8vIFdlIHNob3VsZCB3cmFwIGBvcGVuYCBpbiBhIG5ldyBQcm9taXNlIGJlY2F1c2UgYG9wZW5gIGlzIGFscmVhZHkgcmVzb2x2ZWRcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICBvcGVuKHNlYXJjaFVybCwge1xuICAgICAgICB3YWl0OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=