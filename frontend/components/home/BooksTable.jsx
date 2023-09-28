import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import Footer from "./Footer";

const BooksTable = ({ books }) => {
  return (
    <div>
      <table
        className="w-full"
        style={{ borderCollapse: "collapse", border: "2px solid green" }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderLeft: "none",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            >
              No
            </th>
            <th
              style={{
                borderLeft: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            >
              Title
            </th>
            <th
              style={{
                borderLeft: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            >
              Author
            </th>
            <th
              style={{
                borderLeft: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            >
              Publish Year
            </th>
            <th
              style={{
                borderLeft: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            >
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td
                className="border border-slate-700 rounded-md text-center"
                style={{
                  borderLeft: "none",
                  borderBottom: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {index + 1}
              </td>
              <td
                className="border border-slate-700 rounded-md text-center"
                style={{
                  borderLeft: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {book.title}
              </td>
              <td
                className="border border-slate-700 rounded-md text-center max-md:hidden"
                style={{
                  borderLeft: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {book.author}
              </td>
              <td
                className="border border-slate-700 rounded-md text-center max-md:hidden"
                style={{
                  borderLeft: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {book.publishYear}
              </td>
              <td
                className="border border-slate-700 rounded-md text-center"
                style={{
                  borderLeft: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default BooksTable;
