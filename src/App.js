import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main id="main" class="main">

        <div class="pagetitle">
          <h1>Data Tables</h1>
          <nav>
            <ol class="breadcrumb">
            </ol>
          </nav>
        </div>

        <section class="section">
          <div class="row">
            <div class="col-lg-12">

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Liste commande</h5>
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Couleur</th>
                        <th scope="col">Quantite</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>ROBE</td>
                        <td>Bleu</td>
                        <td>3</td>
                        <td>2023-05-25</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Short</td>
                        <td>Gris</td>
                        <td>1</td>
                        <td>2023-12-05</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Lunette</td>
                        <td>Noir</td>
                        <td>4</td>
                        <td>2023-08-12</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Chaussure</td>
                        <td>Marron</td>
                        <td>2</td>
                        <td>2023-06-11</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Che;ise</td>
                        <td>Blanc</td>
                        <td>5</td>
                        <td>2023-04-19</td>
                      </tr>
                    </tbody>
                  </table>


                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
