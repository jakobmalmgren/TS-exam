var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from "./fetchApi.js";
import { bookColorEl, titleEl, authorEl, bookImageTitleEl, bookImageAuthorEl, infoTextEL, audienceEl, publishedEL, pagesEL, publisherEl, overlayEl, } from "./variables.js";
export const contentBooks = (index) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData();
    bookColorEl.style.backgroundColor = `${data[index].color}`;
    if (titleEl) {
        titleEl.innerHTML = data[index].title;
    }
    if (authorEl) {
        authorEl.innerHTML = data[index].author;
    }
    if (bookImageTitleEl) {
        bookImageTitleEl.innerHTML = data[index].title;
    }
    if (bookImageAuthorEl) {
        bookImageAuthorEl.innerHTML = data[index].author;
    }
    if (infoTextEL) {
        infoTextEL.innerHTML = data[index].plot;
    }
    if (audienceEl) {
        audienceEl.innerHTML = ` Audience: ${data[index].audience}`;
    }
    if (publishedEL) {
        publishedEL.innerHTML = `First published: ${data[index].year}`;
    }
    if (pagesEL) {
        pagesEL.innerHTML = `Pages: ${data[index].pages}`;
    }
    if (publisherEl) {
        publisherEl.innerHTML = ` Publisher:${data[index].publisher}`;
    }
    overlayEl.style.display = "flex";
});
